<template>
  <div >
    
    <mu-dialog :open="dialog.state" title="提示" @close="cloneDialog" dialogClass="titleDialog">
      {{dialog.text}}
      <mu-flat-button slot="actions" primary @click="cloneDialog" class="titleDialog_button_cen" label="取消"/>
      <mu-flat-button slot="actions" primary @click="succDialog" class="titleDialog_button_succ" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script>

  export default {
    data(){
      return {
         transition_name:'slide-left',
        
      }
    },
    props:['dialog','succDialog'],
    methods: {
      cloneDialog(){
        this.$emit('cloneDia',false)
      }
     
    }
  }
</script>

<style lang="less">

.titleDialog{
  border-radius: 5px;
  .mu-dialog-title{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    text-align: center;
    display: block;
    background-color: #d3dbea;
    padding:5px 0;
    font-size: 15px;
  }
  .mu-dialog-actions{
    padding:10px 20px;
    justify-content:space-between;
    .titleDialog_button_cen{
      border: 1px solid #e4397f;
      border-radius: 4px;
      color:#e4397f;
    }
    .titleDialog_button_succ{
      border-radius: 4px;
      background-color:#e4397f;
      color:#fff;
    }
  }
  .mu-dialog-body {
    padding-top:20px;
  }
  
}

</style>
