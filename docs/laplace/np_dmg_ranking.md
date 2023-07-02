# NP Damage Ranking

### Select Targets
- **(Recommended)** In any quest detail page, click on enemy icon then select NP Damage from the top right menu to set
  it as the target
- Edit dummy target directly
  - Needs decent knowledge of FGO data structure, mainly traits & supereffective damage

### Options
- Support Servant: Skill levels are set to 10/10/10, does not use NP, and will be removed from team once done casting skills
- Game Server: Determines strengthen status
- Player Data: Whether to use data from current plan to setup servants
- Fixed OC: Disables OC related buffs, use the set value as OC value
- Twice Skills: Current logic is to cast all skills in one turn, so some 1T buff will be counted twice
- Debuff Immune: Since some servants have skills that stun themselves (Lip), this option needs to be enabled for those
  servants to attack properly
  - Also, since Supports will be removed once skills are cast, Caren's Passive will not activate
- Force Enable NP S.E.: Only force enable for NP, will not force enable buff related ones
- Some Other Notes:
  - Kukulkan will always use the skill option to consume Critical Stars (even if there's not enough to consume)
  - Space Ishtar, Emiya will have each of their NP type ranked separately
  - Melusine has three forms: ST Arts NP without using skill 3, starts with ST Arts NP then uses skill 3 to transform to
    AOE Buster NP, and starts with AOE Buster NP directly. These three are also ranked separately

### Ranking
Click on each lane to check parameters
- Click on the icon in the top right corner for filtering
- After checking parameters, can click Details to view actions performed
- NP Gain arrow means there are NP gained not from the NP damage itself. E.g. Space Ishtar
- Succeeded Instant Death NP will have higher priority in ranking