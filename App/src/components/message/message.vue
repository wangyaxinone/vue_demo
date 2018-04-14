<template>
  <div class="message_container">
    <div class="message_body">
      <messageGroup></messageGroup>  
      <messageGroup></messageGroup>  
      <messageGroup></messageGroup>  
      <messageGroup></messageGroup>  
      <messageGroup></messageGroup>  
      <messageGroup></messageGroup>  
      <messageGroup></messageGroup>  
      <messageGroup></messageGroup>  
      <messageGroup></messageGroup>  
      <messageGroup></messageGroup>  
      <messageGroup></messageGroup>  
      <messageGroup></messageGroup>  
      <messageGroup></messageGroup>  
    </div>
    <div class="header">
      <mu-flat-button @click="qieHuan('qun')" label="群聊" :color="backgroundColor" :backgroundColor="unBackgroundColor" class="demo-flat-button"/><mu-flat-button @click="qieHuan('si')" label="私聊"  :color="unBackgroundColor" :backgroundColor="backgroundColor" class="demo-flat-button"/>
      
    </div> 
    
  </div>

  <!-- tab-container -->

</template>

<script>
    import messageGroup from './messageGroup';
    export default {
      data(){
        return {
            backgroundColor:'#2ea594'
        }
      },
      methods:{
        qieHuan(type){
          if(type==='qun'){
            this.backgroundColor='#2ea594';
          }else{
            this.backgroundColor='#fff';
          }
        }
      },
      components:{
        'messageGroup':messageGroup
      },
      computed:{
        unBackgroundColor:function(){
          if(this.backgroundColor==='#2ea594'){
            return '#fff'
          }else{
            return '#2ea594'
          }
        }
      },
    }
</script>


<style  lang="less">
  .message_container{
    background-color: #eee;
    width:100%;
     height:100%;
    .header{
      height:56px;
      background-color: #2ea594;
      text-align: center;
      position: fixed;
      top:0;
      width:100%;
      .demo-flat-button{
        border:1px solid #fff;
        margin-top:10px;
      }
      .demo-flat-button:first-child{
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      .demo-flat-button:last-child{
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
    }
    .message_body{
      margin-top:56px;
      margin-bottom:80px;
    }
  }
</style>
