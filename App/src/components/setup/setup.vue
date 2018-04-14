<template>
  <div class="setting_container">
    <div class="body_container">
      <settingGroup v-for="it in setting" :key="it.key" :icons="it.icons" :list="it.list"></settingGroup>
    </div>
    <div class="header">
      <div class="header_title">设置</div>    
      <mu-icon-button icon="keyboard_arrow_left" class="float-button" to="/home" iconClass="float-button-icon"/>  
    </div> 
  </div>
</template>

<script>
    import settingGroup from './settingGroup';
    import store from '@/vuex/store';
    import {mapState,mapMutations} from 'Vuex';
    export default {
      data(){
        return {

        }
      },
      components:{
        'settingGroup':settingGroup
      },
      computed:{
        ...mapState(['setting'])
      },
      methods:{
        
      },
      store
    }
</script>


<style lang="less">
  .setting_container{
    position: absolute;
    top:0;
    left:0;
    right:0px;
    bottom:0px;
    background-color:#eee;
    .header{
      height:45px;
      background-color: #2ea594;
      text-align: center;
      position: fixed;
      width:100%;
     
      top:0;
      .float-button{
        position: absolute;
        top:0;
        left:0;
        float: left;
        .float-button-icon{
          color:#fff;
        }
      }
      .header_title{
        height:45px;
        line-height: 45px;
        color: #fff;
        font-size: 18px;
      }
    }
    .body_container{
      margin-top:45px;
    }
  }
</style>
