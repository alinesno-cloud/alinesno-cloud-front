# Organization组件参数说明书：

| 序号 | 参数命名      | 参数类型  | 解释                                     | 默认值           
|------|--------------|-----------|------------------------------------------|-----------------|
| 1    | title        | String    | 标题                                     | ‘组织机构’       |
| 6    | show         | Bool      | 是否显示组件                              |   false         |
| 2    | tabList      | Array     | 选择菜单组，user是选择用户，dep是选择组织  | ['user','dept'] |
| 3    | searchable   | Bool      | 是否允许搜索                              |  true           |
| 6    | maxNum       | Int       | 允许选择的最大个数                        |   99            |
| 7    | confirm      | Function  | 点击确定触发的事件，传回选中的数据         |                 |