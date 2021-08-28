<template>
    <div class="home">
        <el-row :gutter="10" class="mb8">
            <el-col :span="1.5">
                <el-button
                        :type="btnType"
                        :plain="plain"
                        :round="round"
                        :circle="circle"
                        :icon="btnIcon"
                        :size="btnSize"
                        @click="handleImport"
                >导入
                </el-button>
            </el-col>
        </el-row>
        <!-- 用户导入对话框 -->
        <el-dialog :title="title" :visible.sync="upload.open" width="400px" append-to-body>
            <el-upload
                    ref="upload"
                    :limit="limit"
                    :accept="accept"
                    :action="importUrl"
                    :disabled="upload.isUploading"
                    :on-progress="handleFileUploadProgress"
                    :on-success="handleFileSuccess"
                    :on-error = "handleFileError"
                    :auto-upload="autoUpload"
                    :multiple="multiple"
                    drag
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip text-center" slot="tip">
                    <span>{{ tip }}</span>
                    <el-link v-show="showTemplate" type="primary" :underline="false" style="font-size:12px;vertical-align: baseline;"
                             @click="importTemplate(downloadUrl)">下载模板
                    </el-link>
                </div>
            </el-upload>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitFileForm">确 定</el-button>
                <el-button @click="upload.open = false">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

    import {importTemplate} from "alinesno-ui/src/api/download";

    export default {
        name: 'Home',
        props: {
            btnType: {
                type: String,
                default: () => ''
            },
            btnSize: {
                type: String,
                default: () => 'medium'
            },
            plain: {
                type: Boolean,
                default: () => false
            },
            round: {
                type: Boolean,
                default: () => false
            },
            circle: {
                type: Boolean,
                default: () => false
            },
            title: {
                type: String,
                default: () => '导入'
            },
            downloadUrl: {
                type: String,
                default: () => process.env.VUE_APP_DOWNLOAD_URL ? process.env.VUE_APP_DOWNLOAD_URL : '/common/download'
            },
            disabledUpload: {
                type: Boolean,
                default: () => false
            },
            importUrl: {
                type: String,
                default: () => '/common/import'
            },
            tip: {
                type: String,
                default: () => '仅允许导入xls、xlsx格式文件。'
            },
            showTemplate: {
                type: Boolean,
                default: () => true
            },
            limit: {
                type: Number,
                default: () => 3
            },
            accept: {
                type: String,
                default: () => ''
            },
            btnIcon: {
                type: String,
                default: () => 'el-icon-upload'
            },
            autoUpload: {
                type: Boolean,
                default: () => false
            },
            multiple: {
                type: Boolean,
                default: () => false
            },
        },
        data() {
            return {
                // 用户导入参数
                upload: {
                    // 是否显示弹出层（用户导入）
                    open: false,
                    // 弹出层标题（用户导入）
                    title: '导入',
                    // 是否禁用上传
                    isUploading: false,
                    // 是否更新已经存在的用户数据
                    updateSupport: 0,
                    // 设置上传的请求头部
                    // headers: {Authorization: "Bearer " + getToken()},
                    // 上传的地址
                    url: ''
                },
            }
        },
        methods: {
            /** 导入按钮操作 */
            handleImport() {
                this.upload.title = this.title
                this.upload.open = true
            },
            /** 下载模板操作 */
            importTemplate() {
                importTemplate(this.downloadUrl).then(response => {
                    this.download(response.msg);
                });
            },
            // 文件上传中处理
            handleFileUploadProgress(event, file, fileList) {
                console.log(fileList)
                this.upload.isUploading = true;
                this.$emit('handleFileUploadProgress', event, file, fileList)
            },
            // 文件上传成功处理
            handleFileSuccess(response, file, fileList) {
                this.upload.open = false;
                this.upload.isUploading = false;
                this.$refs.upload.clearFiles();
               // this.$alert(response.msg, "导入结果", {dangerouslyUseHTMLString: true});
                this.$emit('success', response, file, fileList)
            },
            // 文件上传失败处理
            handleFileError(response, file, fileList) {
                this.$emit('handleFileError', response, file, fileList)
            },
            // 提交上传文件
            submitFileForm() {
                this.$refs.upload.submit();
            }
        }
    }
</script>
