<template>
    <div class="transfer-box">
        <el-row :gutter="20">
            <el-col :span="8">
                <el-input v-model="content" @focus="dialogVisible = true" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" size="medium">搜索</el-button>
                <el-button type="success" size="medium">取消</el-button>
            </el-col>
        </el-row>
        <el-dialog
                title="组件结构&人员搜索"
                :visible.sync="dialogVisible"
                width="60%"
                >
            <tree-transfer
                    style="padding: 10px 10px"
                    filter
                    openAll
                    :user-for-dept-id="currentUserDeptId"
                    :title="title"
                    :from_data='fromData'
                    :to_data='toData'
                    :defaultProps="{label:'label'}"
                    :mode='mode'
                    :height='540'
                    :default-from-checked-keys="defaultFromCheckedKeys"
                    :default-user-checked-keys="defaultUserCheckedKeys"
                    :default-to-checked-keys="defaultToCheckedKeys"
                    @add-btn='add'
                    @remove-btn='remove'
                    @left-check-change="leftCheckChange"
                    @right-check-change="rightCheckChange"
                    @btnConfirm="btnConfirm"
                    @btnReset="btnReset"
            >
            </tree-transfer>
            <span slot="footer" class="dialog-footer">
  </span>
        </el-dialog>
    </div>
</template>

<script>

    import treeTransfer from "./TreeTransfer.vue";

    export default {
        components: {treeTransfer},
        props: {
            fromData: {
                type: Array,
                default: () => []
            },
            toData: {
                type: Array,
                default: () => []
            },
            currentUserDeptId: {
                type: String,
                default: () => ''
            },
            defaultFromCheckedKeys: {
                type: Array,
                default: () => [],
            },
            defaultUserCheckedKeys: {
                type: Array,
                default: () => [],
            },
            defaultToCheckedKeys: {
                type: Array,
                default: () => [],
            },
            filterType: {
                type: Number,
                default: () => 0
            }
        },
        data() {
            return {
                content: '',
                dialogVisible: false,
                title: ['组织机构', '所在部门', '搜索结果', '已选人员'],
                mode: "transfer", // transfer addressList
               // defaultFromCheckedKeys: [3],
              //  defaultUserCheckedKeys: [5],
               // defaultToCheckedKeys: [3],
                confirmData: Object,
            }
        },
        methods: {
            // 确定按钮
            btnConfirm() {
                this.$emit('btnConfirm', this.confirmData)
                this.$emit('input', this.content)
                this.dialogVisible = false
            },
            // 重置按钮
            btnReset() {
                this.content = ''
            },
            leftCheckChange(nodeObj, treeObj, checkAll) {
                this.$emit('leftCheckChange', nodeObj, treeObj, checkAll)
            },
            rightCheckChange(nodeObj, treeObj, checkAll) {
                this.$emit('rightCheckChange', nodeObj, treeObj, checkAll)
                this.confirmData =  nodeObj, treeObj, checkAll
                // 查询当前用户所在部门
               // let type = 4 // 过滤条件
                let arr = []
                const filterTree = (tree, arr = []) => {
                    if (!tree.length) return []
                    for (let item of tree) {
                        if (item.type === this.filterType) {
                            arr.push(item)
                            if (item.children && item.children.length) {
                                filterTree(item.children, arr)
                            }
                        } else {
                            if (item.children && item.children.length) {
                                filterTree(item.children, arr)
                            }
                        }
                    }
                    return arr
                }
                filterTree(treeObj.checkedNodes, arr);
                //去重函数
                const unique = (arr) => {
                    const res = new Map();
                    return arr.filter((arr) => !res.has(arr.id) && res.set(arr.id, 1));
                }
                var unique1 = unique(arr);
                console.log(unique1)
                this.confirmData = unique1
                let strs = []
                Object.keys(unique1).map((key) => {
                    strs.push(unique1[key].label)
                })
                this.content = [...strs]
            },
            open() {
                this.open = true;
            },
            changeMode() {
                if (this.mode == "transfer") {
                    this.mode = "addressList";
                } else {
                    this.mode = "transfer";
                }
            },
            // 监听穿梭框组件添加
            add(fromData, toData, obj) {
                this.$emit('add', fromData, toData, obj)
            },
            // 监听穿梭框组件移除
            remove(fromData, toData, obj) {
                this.$emit('remove', fromData, toData, obj)
            }
        },
    };
</script>
<style>
    .operation {
        padding: 20px 24px;
    }

    .transfer-box {
        width: 880px;
        margin: auto;
        margin-top: 10px;
    }
</style>