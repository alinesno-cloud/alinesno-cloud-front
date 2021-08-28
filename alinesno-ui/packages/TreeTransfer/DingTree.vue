<template>
    <div class="container">
        <el-button icon="el-icon-plus" @click="dialogVisible = true" type="primary">选择抄送人</el-button>
        <el-dialog
                title="选择抄送人"
                :visible.sync="dialogVisible"
                width="50%"
        >
            <el-row class="row">
                <el-col :span="8" class="left">
                    <div class="left_column">
                        <el-input
                                v-model="deptName"
                                placeholder="请输入名称"
                                clearable
                                size="small"
                                prefix-icon="el-icon-search"
                                style="margin-bottom: 20px"
                        />
                        <div>
                            {{ names }}
                        </div>
                    </div>
                </el-col>
                <el-col class="col" :span="6">
                    <el-tree
                            :data="data"
                            :props="defaultProps"
                            :expand-on-click-node="false"
                            :filter-node-method="filterNode"
                            ref="tree"
                            default-expand-all
                            @node-click="handleNodeClick"
                    />

                </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
    <el-button @click="concel">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "DingTree",
        props: {
          data: {
              type: Array,
              default: () => []
          }
        },
        data() {
            return {
                names: '',
                dialogVisible: false,
                text: '',
                // 部门名称
                deptName: '',
                defaultProps: {
                    children: "children",
                    label: "label"
                },
            }
        },
        watch: {
            // 根据名称筛选部门树
            deptName(val) {
                this.$refs.tree.filter(val);
            }
        },
        methods: {
            // 筛选节点
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            // 节点单击事件
            handleNodeClick(data) {
                // this.$message.info('点击了 ' + data.label)
                if (this.names.includes(data.label)) {
                    return
                } else {
                    this.names += data.label + ','
                }
            },
            concel() {
                this.dialogVisible = false
                this.names = ''
                this.deptName = ''
            },
            confirm() {
                this.dialogVisible = false
                this.$emit('input', this.names.substring(0, this.names.length - 1))
                this.names = ''
                this.deptName = ''
            }
        }

    }
</script>

<style scoped>
    .container {
        padding: 30px 30px;
    }

    .left {
        display: flex;
        margin-left: 20px;
    }

    .left_column {
        display: flex;
        flex-direction: column;
    }

    .input {
        width: 300px;
    }

    .btn {
        margin-left: 20px;
    }

    .col {
        margin-left: 40px;
    }

    .row {
        padding-left: 40px;
        margin-top: 10px;
    }
</style>