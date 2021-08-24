<template>
    <el-select v-model="newValue" :placeholder="placeholder" clearable>
        <el-option label="请选择类型" value="" />
        <el-option v-for="(item , index) in paramArr"
                   :key="index"
                   :value="item.codeValue"
                   :label="item.codeName" />
    </el-select>
</template>

<script>
import { getDicts } from "alinesno-ui/src/api/dict";

export default {
  name: 'DictSelect',
  model: {
    prop: 'modelVal',//指向props的参数名
    event: 'change'//事件名称
  },
  data(){
      return {
          newValue:'' ,
          paramArr: []
      }
  } ,
  props:{
      type: String ,
      modelVal: String,
      placeholder: String ,
      filterAttr: String ,
      defaultValue: String ,
      disableFlag: String ,
      columnName: String ,
  },
  created(){
    this.getDict() ;
  },
  methods:{
      getDict(){
        var dictType = this.type ;
        console.log('directType = ' + dictType)

        getDicts(dictType).then(response => {
            console.log('response = ' + response.data);
            this.paramArr = response.data ;
        });
      }
  },
  watch:{
      //监听值变化，再赋值给modelVal
      newValue(value){
        this.$emit('change',value);
      }
    }
}
</script>

<style lang="scss" scoped>
</style>
