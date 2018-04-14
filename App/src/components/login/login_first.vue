<template>
  <div class="login_first_container">
    
  </div>
</template>

<script>
    import store from '@/vuex/store';
    import {mapState,mapMutations} from 'Vuex';
    export default {
      data(){
        return {
         
        }
      },
      store,
      methods:{
         ...mapMutations(['login']),
      },
      created:function(){
        var data = window.localStorage.getItem('account');
        
        var _this = this;
        if(data){
          var newData = JSON.parse(data);
          _this.login(newData);
          window.setTimeout(function(){
            _this.$router.push('/home')
          },3000)
        }else{
          window.setTimeout(function(){
            _this.$router.push('/login')
          },3000)
        }
      },
      computed:{
      },
      
      
    }
</script>


<style  lang="less">
    .login_first_container {
      position: absolute;
      top:0;
      left:0;
      right:0px;
      bottom:0px;
      background:url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3658907492,3872808117&fm=27&gp=0.jpg) center ;
      background-size: cover;
    }
</style>
