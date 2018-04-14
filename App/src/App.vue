<template>
  <div class="app">
    <transition :name="transition_name">
      <router-view  class="Router"/>
    </transition>
    <myDialog :dialog="dialog" @cloneDia="closeMyDialog" :succDialog='succDialog'></myDialog>
  </div>
</template>

<script>
  import myDialog from '@/components/myDialog.vue';
  export default {
    name: 'app',
    data(){
      return {
        transition_name:'slide-left',
        dialog:{
            state:false,
            text:'真的要退出吗？'
        }
      }
    },
    components:{
        'myDialog':myDialog
    },
    created(){
      var _this = this;
      console.log(_this.$route);
      var index = ['home','Patient','message','queryAdd'];
      document.addEventListener("deviceready",function(){
          document.addEventListener("backbutton", function(){

            if(_this.$route && _this.$route.fullPath){
                var path = _this.$route.fullPath.slice(1);
                if(index.indexOf(path)>-1){
                  _this.dialog.state=true;
                  _this.dialog.text='确认退出吗？';
                }else{
                  _this.$router.go(-1);
                }
            }
            
          }, false);
      },false);
    },
    methods: {
      closeMyDialog(){
          this.dialog.state=false;
      },
      succDialog(){
          this.dialog.state = false;
           navigator.app.exitApp(); //退出app
      }
     
    },
    watch:{
      '$route' (to, from) {
          window.scrollTo({},0)
          var index = ['home','login'];
          const toDepth = to.path.slice(to.path.indexOf('/')+1,to.path.length);
          const fromDepth = from.path.slice(from.path.indexOf('/')+1,from.path.length);
          if((toDepth=='home' && fromDepth=='login') || fromDepth=='login_first'){
            
              this.transition_name = '';
              return;
          }
          if(toDepth=='setup' &&(fromDepth=='myZhangHao' || fromDepth=='xiuGaiXinXi'|| fromDepth=='xiuGaiMiMa'||fromDepth=='liXianShuJu'||fromDepth=='liXianFangShi') ){
            this.transition_name = 'slide-left-root';
            return;
          }
          this.transition_name = index.indexOf(toDepth) >-1 ? 'slide-left-root' : 'slide-right-root'

      }
    }
  }
</script>

<style lang="less">
*{
  padding:0;
  margin:0;
  list-style: none;
}
#app{
  width:100%;
  height:100%;
}
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
.Router {
     position: absolute;
     width: 100%;
     transition: all .6s ease;

}
.slide-left-root-enter,.slide-right-root-leave-active  {
     opacity: 1;
  
}


.slide-left-root-leave-active,.slide-right-root-enter {
     opacity: 1;
     z-index: 2;
    -webkit-transform: translate(100%, 0);
    transform: translate(100% ,0);
}
  @nav-width: 100%;
  .my-mu-paper{
    position: fixed;
    bottom:0;
    width:@nav-width;

    .my-mu-bottom-nav{
        background-color:#323949;
        border-top:2px solid #999;
        .mu-bottom-item-text,.mu-bottom-item-icon{
          color:#fff;
        }
        .mu-bottom-item-active {
            .mu-bottom-item-text,.mu-bottom-item-icon{
                color:#ff3f89;
            }

        }
    }

  }
</style>
