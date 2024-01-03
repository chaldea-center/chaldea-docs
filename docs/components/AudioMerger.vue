<!-- https://github.com/atlasacademy/apps/blob/master/packages/db/src/Descriptor/VoiceLineMerger.tsx -->

<template>
  <div class="audio-merge">
    <span> Audio Files </span>
    <textarea
      v-model="audioInputData"
      rows="10"
      placeholder="urls or delays"
    ></textarea>
    <span>
      <button @click="mergeAudios">Merge</button>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const audioInputData = ref<string>('')

onMounted(async () => {
  const url = new URL(window.location.href)
  const audioData = url.searchParams.get('audioData')
  if (audioData) {
    try {
      const value = atob(audioData)
      if (value) {
        audioInputData.value = value
        mergeAudios()
      }
    } catch (e) {
      console.log(e)
    }
  }
})
const padAudio = (
  audioContext: AudioContext,
  buffer: AudioBuffer,
  delay: number
) => {
  if (delay === 0) {
    return buffer
  }

  const delaySamples = Math.floor(delay * buffer.sampleRate)

  const newBuffer = audioContext.createBuffer(
    buffer.numberOfChannels,
    buffer.length + delaySamples,
    buffer.sampleRate
  )

  for (
    let channelNumber = 0;
    channelNumber < buffer.numberOfChannels;
    channelNumber += 1
  ) {
    newBuffer
      .getChannelData(channelNumber)
      .set(buffer.getChannelData(channelNumber), delaySamples)
  }

  return newBuffer
}

const concatAudios = (context: AudioContext, buffers: AudioBuffer[]) => {
  const maxNumberOfChannels = Math.max(
    ...buffers.map((buffer) => buffer.numberOfChannels)
  )

  let totalLength = 0
  for (let i = 0; i < buffers.length; i++) {
    totalLength += buffers[i].length
  }

  const output = context.createBuffer(
    maxNumberOfChannels,
    totalLength,
    buffers[0].sampleRate
  )

  let offset = 0
  for (let i = 0; i < buffers.length; i++) {
    const buffer = buffers[i]
    for (
      let channelNumber = 0;
      channelNumber < buffer.numberOfChannels;
      channelNumber += 1
    ) {
      output
        .getChannelData(channelNumber)
        .set(buffer.getChannelData(channelNumber), offset)
    }

    offset += buffer.length
  }

  return output
}

const interleave = (buffer: AudioBuffer) => {
  const outLength = buffer.length * buffer.numberOfChannels
  let output = new Float32Array(outLength)
  for (let i = 0; i < buffer.length; i++) {
    for (let channel = 0; channel < buffer.numberOfChannels; channel += 1) {
      const offset = i * buffer.numberOfChannels + channel
      output[offset] = buffer.getChannelData(channel)[i]
    }
  }
  return output
}

const writeString = (dataview: DataView, offset: number, header: string) => {
  for (var i = 0; i < header.length; i++) {
    dataview.setUint8(offset + i, header.charCodeAt(i))
  }
}

const writeWav = (buffer: AudioBuffer) => {
  const pcmData = interleave(buffer)

  // https://docs.fileformat.com/audio/wav/
  const wavType = 1
  const wavNumberOfChannels = buffer.numberOfChannels
  const wavSampleRate = buffer.sampleRate
  const wavBitsPerSample = 16
  const wavSamplesPerSec =
    wavSampleRate * (wavBitsPerSample / 8) * wavNumberOfChannels
  const wavSamplingSizeInBytes = (wavBitsPerSample / 8) * wavNumberOfChannels
  const wavDataSizeInBytes = pcmData.length * (wavBitsPerSample / 8)

  let arrayBuffer = new ArrayBuffer(44 + wavDataSizeInBytes),
    view = new DataView(arrayBuffer)

  writeString(view, 0, 'RIFF')
  view.setUint32(4, wavDataSizeInBytes + 44 - 8, true)
  writeString(view, 8, 'WAVE')
  writeString(view, 12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, wavType, true)
  view.setUint16(22, wavNumberOfChannels, true)
  view.setUint32(24, wavSampleRate, true)
  view.setUint32(28, wavSamplesPerSec, true)
  view.setUint32(32, wavSamplingSizeInBytes, true)
  view.setUint16(34, wavBitsPerSample, true)

  writeString(view, 36, 'data')
  view.setUint32(40, wavDataSizeInBytes, true)

  for (let i = 0; i < pcmData.length; i++) {
    let tmp = Math.max(-1, Math.min(1, pcmData[i]))
    view.setInt16(44 + i * 2, tmp < 0 ? tmp * 0x8000 : tmp * 0x7fff, true)
  }

  return view
}

const mergeAudios = async () => {
  let AudioContext =
    window.AudioContext || // Default
    (window as any).webkitAudioContext || // Safari and old versions of Chrome
    false
  if (!AudioContext) {
    alert('Please use the latest Chrome or Firefox version.')
    return
  }

  const audioContext = new AudioContext({ sampleRate: 44100 })

  try {
    const audioIds: string[] = []
    const lines = audioInputData.value.split('\n')
    const audioBuffsers: AudioBuffer[] = []
    let lastBuffer: AudioBuffer | null = null
    for (const line of lines) {
      if (!line) continue
      const delay = parseFloat(line)
      if (!isNaN(delay)) {
        if (delay <= 0 || !lastBuffer) continue
        lastBuffer = padAudio(audioContext, lastBuffer, delay)
      } else {
        audioIds.push(
          new URL(line).pathname.split('/').slice(-1)[0].split('.')[0]
        )
        if (lastBuffer != null) {
          audioBuffsers.push(lastBuffer)
          lastBuffer = null
        }
        const buffer = await (await fetch(line.trim())).arrayBuffer()

        lastBuffer = await new Promise<AudioBuffer>((res) => {
          audioContext.decodeAudioData(buffer, (buffer) => res(buffer))
        })
      }
    }
    if (lastBuffer != null) {
      audioBuffsers.push(lastBuffer)
      lastBuffer = null
    }

    const combinedAudio = concatAudios(audioContext, audioBuffsers)
    const audioDataView = writeWav(combinedAudio)
    const audioBlob = new Blob([audioDataView], { type: 'audio/wav' })

    const a = document.createElement('a')
    a.href = URL.createObjectURL(audioBlob)
    a.download = `merged - ${audioIds.join('-')}.wav`
    a.click()
  } catch (e) {
    alert('Failed to download some voice line parts.')
  }

  await audioContext.close()
}
</script>

<style>
.audio-merge textarea {
  width: 100%;
  padding: 8px 12px;
  margin: 8px 0;
  box-sizing: border-box;
  resize: vertical;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}

.audio-merge button,
.file-btn {
  background-color: #04aa6d;
  border: none;
  color: white;
  padding: 6px 12px;
  margin: 2px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
