<!--钉钉转发选择人员-->
<template>
    <div>
        <div style="display: flex">
            <el-button style="margin-left: 10px" type="primary" @click="dialogVisible = true" size="medium"><i class="el-icon-s-promotion"/> 转发</el-button>
        </div>
        <el-dialog
                title="选择人员"
                :visible.sync="dialogVisible"
                width="50%"
        >
            <el-row>
                <el-col :span="12">
                   <div class="choose_content">
                       <el-input
                               v-model="keyword"
                               placeholder="请输入内容搜索"
                               clearable
                               size="medium"
                               prefix-icon="el-icon-search"
                               style="width: 252px"
                       />
                       <div class="tag_content">
                           <el-tag
                                   @close="handleTagClose(item)"
                                   class="tag"
                                   v-for="item in multipleSelection"
                                   :key="item.name"
                                   type="info"
                                   closable
                                   effect="plain">
                               {{ item.name }}
                           </el-tag>
                       </div>
                   </div>
                </el-col>
                <el-col :span="12">
                    <div class="people_table">
                        <el-table
                                ref="multipleTable"
                                :data="tableData"
                                tooltip-effect="dark"
                                style="width: 100%"
                                @selection-change="handleSelectionChange">
                            <el-table-column
                                    type="selection"
                                    width="55">
                            </el-table-column>
                            <el-table-column
                                    align="center"
                                    prop="name"
                                    label="姓名"
                                    width="200">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
                <el-button size="medium" class="confirm_btn" type="primary" @click="handleConfirm">{{ confirmBtnText }}</el-button>
                <el-button size="medium" class="cancel_btn" @click="dialogVisible = false">取 消</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>

    export default {
        props: {
            data: {
                type: Array,
                default: () => []
            },
            filterValue: {
                type: String,
                default: () => 'name'
            },
        },
        data() {
            return {
                ids: [],
                keyword: '',
                text: '',
                confirmBtnText: '',
                dialogVisible: false,
                tableData: [],
                multipleSelection: []
            }
        },
        watch: {
            keyword(val) {
               if (val) {
                   var filter = this.tableData.filter(s => s[`${this.filterValue}`].includes(val));
                   return this.tableData = filter
               }
                this.tableData = this.data
            }
        },
        mounted() {
            this.tableData = this.data
            this.confirmBtnText = '确 定(' + this.data.length + ')'
        },
        methods: {
            handleTagClose(data) {
                const arr = this.multipleSelection
                for (let i in arr) {
                    if (arr[i].name.includes(data.name)) {
                        this.multipleSelection.splice(i, 1)
                    }
                }
                this.confirmBtnText = '确 定(' + this.multipleSelection.length + '/' + this.tableData.length + ')'
                // 取消 el-table 中的 checkbox 选中
                this.$refs.multipleTable.toggleRowSelection(data, false);
            },
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                this.confirmBtnText = '确 定(' + this.multipleSelection.length + '/' + this.tableData.length + ')'
            },
            handleConfirm() {
                this.dialogVisible = false
                let arr = []
                for (let x of this.multipleSelection) {
                    arr.push(x.id)
                }
                this.$emit('input', arr)
            },
            handleCancel() {
                this.multipleSelection = []
            }
        }
    }
</script>

<style>
    .tag {
        width: auto;
        margin-top: 10px;
        margin-right: 10px;
    }
    .choose_content {
        display: flex;
        flex-direction: column;
    }
    .tag_content {
        flex-direction: row;
    }
    .confirm_btn {
        width: auto;
    }
    .cancel_btn {
        width: 100px;
    }
    .el-dialog__footer {
        text-align: left;
    }
    .el-checkbox__inner {
        border-radius: 50px;
    }
    .people_table {
        height: 300px;
        overflow-y: scroll
    }

    .people_table::-webkit-scrollbar {
        width: 8px;
    }

    .people_table::-webkit-scrollbar-track {
        background-color: #DDDDDD;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius: 2em;
    }

    .people_table::-webkit-scrollbar-thumb {
        background-color: #4e8ef4;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius: 2em;
    }
</style>
