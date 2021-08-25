<!--照片墙上传-->
<template>
    <div>
        <el-upload
                :action="uploadUrl"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-success="handleUploadSuccess"
                :on-error="handleUploadError"
                :before-upload="beforeUploadUpload"
                :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: {
            uploadUrl: {
                type: String,
                default: '/common/upload'
            },
            fileSize: {
                type: String,
                default: '2'
            },
            fileType: {
                type: String,
                default: 'image/jpeg'
            },
        },
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false
            };
        },
        methods: {
            handleRemove(file, fileList) {
                this.$emit('handleRemove', file, fileList)
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
                this.$emit('handlePictureCardPreview', file)
            },
            handleUploadSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                this.$emit('handleUploadSuccess', res, file)
            },
            handleUploadError(res, file) {
                this.$emit('handleUploadError', res, file)
            },
            beforeUploadUpload(file) {
                var split = this.fileType.split(",");
                var filter = split.filter(s => s.includes(file.type));
                const isType = filter.length > 0;
                if (!isType) {
                    let reg = new RegExp('image/', "g") // g 代表全部
                    this.$message.error('上传头像图片只能是 ' + JSON.parse(JSON.stringify(split).replace(reg, "")) + ' 格式!'); // 将所有的 image/ 替换成 ""
                }
                const isLtSize = file.size / 1024 / 1024 < parseInt(this.fileSize);
                if (!isLtSize) {
                    this.$message.error('上传头像图片大小不能超过 ' + this.fileSize + ' MB!');
                }
                this.$emit('beforeUploadUpload', file)
                return isType && isLtSize
            }
        }
    }
</script>