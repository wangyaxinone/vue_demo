<template>
  <div id="app">
    <transition :name="transition_name">
      <router-view  class="Router"/>
    </transition>
    <footer>
      <mu-dialog :open="queryAdddialog" @close="close" title="快速创建" bodyClass="queryAdd_dialog_body" titleClass="queryAdd_dialog_title" scrollable>
        <mu-menu class="mu-menu">
          <ul>
            <li v-for="it in patient_state.all_filter.list" :key="it.key" @click="filter_li" v-if="!it.type" v-bind:class="it.type">
                <mu-icon class="fenzu_icon"  :value="it.icon" :size="16" color="#ff4081"/>
                <a href="javascript:void(0)">{{it.name}}</a>
            </li>
        </ul>
        </mu-menu>
        <mu-flat-button primary label="关闭" @click="close" slot="actions"/>
      </mu-dialog>
      <mu-paper class="my-mu-paper">
        <mu-bottom-nav class="my-mu-bottom-nav" :value="bottomNav" @change="handleChange" >
          <mu-bottom-nav-item value="home"    to="/home" title="首页" icon="home"/>
          <mu-bottom-nav-item value="Patient" to="/Patient" title="学生" icon="people"/>
          <mu-bottom-nav-item value="message" to="/message" title="消息" icon="chat_bubble_outline"/>
          <mu-bottom-nav-item value="queryAdd" title="快速创建" icon="add"/>
        </mu-bottom-nav>
      </mu-paper>
      
    </footer>
    

  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapState,mapMutations} from 'Vuex'; 
  export default {
    name: 'app',
    data () {
      const menus = []
      for (let i = 0; i < 30; i++) {
        menus.push(i + 1)
      }
      return {
        queryAdddialog: false,
        menus:menus ,
        bottomNav: 'home',
        transition_name:'slide-left',
        
      }
    },
   
    
    store,
    computed:{
      ...mapState(['patient_state'])
    },
    methods: {
      handleChange (val) {
        if(val ==='queryAdd'){
          this.open();
        }else{
          this.bottomNav = val;
        }
      },
      open () {
        
        this.queryAdddialog = true
      },
      close () {
        this.queryAdddialog = false
      },
      filter_li(){

      }
    },
    watch:{
      '$route' (to, from) {
        window.scrollTo({},0)
        var index = ['home','Patient','message','queryAdd'];
        const toDepth = to.path.slice(to.path.indexOf('/')+1,to.path.length);
        const fromDepth = from.path.slice(from.path.indexOf('/')+1,from.path.length);
        this.bottomNav = toDepth;
        this.transition_name = index.indexOf(toDepth) < index.indexOf(fromDepth)  ? 'slide-right' : 'slide-left'

      }
    }
  }
</script>

<style lang="less">
.queryAdd_dialog_title{
  background-color: #d7e7f7;;
  padding:6px 12px;
  border-bottom:0px !important;
}
 .mu-menu{
    width:100% !important;
    .mu-menu-list{
      width:100% !important;
    }
  }
.queryAdd_dialog_body{
  padding:0px;
 
  ul{
    background-color: #fff;
    
    width:100%;
    border-radius: 6px;
    li.filter_title{
        background-color:#d6dbea;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    li.filter_text{
        background-color: #eee;
    }
    li{
        text-align: left;
        padding:0px 12px;
        height:40px;
        line-height:40px;
        border-bottom: 1px solid #ddd;
        .fenzu_icon{
            vertical-align: middle;
            margin-top:-3px;
        }
    }
}
}
.Router {
     position: absolute;
     width: 100%;
     transition: all .6s ease;

}
.slide-left-enter,.slide-right-leave-active  {
     opacity: 1;
  
}


.slide-left-leave-active,.slide-right-enter {
     opacity: 1;
     z-index:1;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% ,0);
}

  @nav-width: 100%;
  .my-mu-paper{
    position: fixed;
    bottom:0;
    z-index: 10;
    width:@nav-width;

    .my-mu-bottom-nav{
        background-color:#fff;
        border-top: 1px solid #ddd; 
        .mu-bottom-item-text,.mu-bottom-item-icon{
          color:#777;
        }
        .mu-bottom-item-active {
            .mu-bottom-item-text,.mu-bottom-item-icon{
                color:#2ea594;
            }

        }
    }

  }
</style>
