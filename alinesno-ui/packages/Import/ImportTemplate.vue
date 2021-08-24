<!--导入包含下载模板组件-->
<template>
    <div class="home">
        <el-row :gutter="10" class="mb8">
            <el-col :span="1.5">
                <el-button
                        :type="btnType"
                        :plain="isPlain"
                        :round="isRound"
                        :circle="isCircle"
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
                    :limit="uploadLimit"
                    :accept="uploadAccept"
                    :action="upload.url"
                    :disabled="upload.isUploading"
                    :on-progress="handleFileUploadProgress"
                    :on-success="handleFileSuccess"
                    :auto-upload="false"
                    drag
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip text-center" slot="tip">
                    <span>{{ tip }}</span>
                    <el-link v-show="isShowTemplate" type="primary" :underline="false" style="font-size:12px;vertical-align: baseline;"
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


    import {importTemplate} from "../../src/api/import";

    export default {
        name: 'Home',
        props: {
            type: String,
            size: String,
            plain: Boolean,
            round: Boolean,
            circle: Boolean,
            title: String,
            downloadUrl: String,
            disabledUpload: Boolean,
            importUrl: String,
            tip: String,
            showTemplate: Boolean,
            limit: String,
            accept: String,
            icon: String,
        },
        data() {
            return {
                isShowTemplate: true,
                exportLoading: false,
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
                isPlain: false,
                isRound: false,
                isCircle: false,
                btnType: 'info',
                btnSize: 'mini',
                uploadLimit: 1,
                uploadAccept: '.xlsx, .xls',
                btnIcon: 'el-icon-upload2',
            }
        },
        mounted() {
            this.upload.isUploading = this.disabledUpload
            this.upload.url = this.importUrl
            this.isPlain = this.plain
            this.isRound = this.round
            this.isCircle = this.circle
            this.btnType = this.type
            this.btnIcon = this.icon
        },
        methods: {
            /** 导入按钮操作 */
            handleImport() {
                this.upload.title = this.title
                this.upload.open = true
                this.isShowTemplate = this.showTemplate
                this.btnSize = this.size
                this.uploadLimit = parseInt(this.limit)
                this.uploadAccept = this.accept
            },
            /** 下载模板操作 */
            importTemplate() {
                importTemplate(this.downloadUrl).then(response => {
                    this.download(response.msg);
                });
            },
            // 文件上传中处理
            handleFileUploadProgress(event, file, fileList) {
                this.upload.isUploading = true;
            },
            // 文件上传成功处理
            handleFileSuccess(response, file, fileList) {
                this.upload.open = false;
                this.upload.isUploading = false;
                this.$refs.upload.clearFiles();
                this.$alert(response.msg, "导入结果", {dangerouslyUseHTMLString: true});
            },
            // 提交上传文件
            submitFileForm() {
                this.$refs.upload.submit();
            }
        }
    }
</script>
