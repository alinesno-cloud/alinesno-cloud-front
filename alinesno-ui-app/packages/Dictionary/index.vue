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
  data(){
      return {
          newValue:'' ,
          paramArr: []
      }
  } ,
  props:{
      dictType: String ,
      placeholder: String ,
      filterAttr: String ,
      defaultValue: String ,
      disableFlag: String ,
      columnName: String ,
  },
  created(){
    this.getDict() ;
  },
  computed:{
      newValue:{
          get:function(){
              return this.value + '' ;
          },
          set: function(value){
              this.$emit('input', value);
          }
      }
  },
  methods:{
      getDict(){
        var dictType = this.dictType ;
        console.log('directType = ' + dictType)

        getDicts(dictType).then(response => {
            console.log('response = ' + response.data);
            this.paramArr = response.data ;
        });
      }
  }
}
</script>

<style lang="scss" scoped>
</style>
