# 御主任务

用于周常任务或限时御主任务的规划。

与 Free 本规划类似，均采用线性规划，但此处使用**整数**线性规划。

## 获取各区服御主任务

点击右上角下拉框可切换区服，获取实时御主任务信息，包括周常/日常/特殊任务等。其中国服一般塞了从很久很久以前至今所有任务，以及未来数周至数月的任务，可根据任务 ID 推断未来周常时间。

点进御主任务详情后，对于可规划的任务目标，有一个搜索图标，点击可跳转到自定义任务页面搜索该任务目标。也可点击下方求解按钮统一规划所有任务。

## 自定义任务

任务描述由游戏内数据自动解析并描述，可能阅读上没那么自然。

点开任务可修改任务目标:

- 类型: 分为敌人特性、从者职阶、非从者职阶等等
- 计数: 任务目标数
- IDs: 针对当前类型，任务对象的特性或职阶等，对于同一 ID，在不同任务类型中可能为无效值。点击加号可添加新目标 ID

**Free 本进度**

- 默认采用全部主线 Free 作为规划关卡，可选择不同的主线进度
- 也可选择限时活动 Free 本作为规划关卡，采用日服/美服自 2020/11 之后的数据，部分活动或关卡可能没有相关数据。

**主线 Free 范围**:

- 从特异点 F 至选择的主线为止的所有主线 Free，以及每日关卡中的初级至极级"打开宝物库之门"。
- 修炼场和种火收集关卡由于敌人随机，不列入规划范围。
- 以日服数据为准。

**求解**

点击求解后可获得最少 AP 方案，以及相应的关联关卡供自行选择。
每个关卡已标出所能完成的各任务目标数。

**注意**

- 限时活动的关卡数据实时下载，部分关卡没有数据
- 出现率活动结果不准确
- 注意任务可能存在无法完成而被忽略的情况

## 活动任务

在包含任务的活动中，在任务页也可以选择不同的活动任务并跳转到该自定义任务页面进行规划，将使用活动 Free 本进行计算。

## 设置选项

- **添加Traum敌人的[非从者]特性**: 日服于2023.08左右删除了LB 6.5部分职阶从者的〔非从者〕(小怪)特性，不再可用于“击败x个敌人(从者和一部分首领除外)”的任务。但其他区服目前实际仍持有〔非从者〕特性，计算结果可能非最优解，在确定目标区服敌人持有该特性时可打开该选项（国服已于2024.8实装了本改动，不需要打开）。
- **排除随机敌人的关卡**: Ordeal Call中部分关卡(掉落技能石的关卡)的敌人随机，主要是职阶不同，可能会影响计算结果。
- **黑名单**: 字面意思。举例如，国服当前版本西之村遗迹Free关卡中，三种哈桑（小怪）并未添加〔秩序〕特性（日服约2024.4添加），在进行任务规划时会影响计算，建议手动将该关卡列入黑名单。
