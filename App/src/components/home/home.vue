<template>
  <div class="home_container" >
    
    
    <div class="home_img_container">
      <img class="home_img_default" src="../../assets/bg.jpg" alt="">
      <div title=""  class="imgClass" >
        <img  src="../images/avatar_female.png" />
      </div>
    </div>
    <div class="home_user">
      <p>
        <span>{{account.dispName}}</span>
        <span class="home_user_welcome">欢迎您!</span>
      </p>
      <p>
        <span>{{date}}</span>

      </p>
    </div>
    <div class="home_count">
      <mu-flexbox>
       <mu-flexbox-item align="center" justify="center" class="home_count_flex">

           <p class="home_count_head">{{sumPackage}}</p>
           <p class="home_count_body">班级数量</p>

       </mu-flexbox-item>
       <mu-flexbox-item align="center" justify="center" class="home_count_flex">
         <p class="home_count_head">{{packageGrowth}}</p>
         <p class="home_count_body">学生人数</p>
       </mu-flexbox-item>
       <mu-flexbox-item align="center" justify="center" class="home_count_flex">
         <p class="home_count_head">{{lastMonthSurvey}}</p>
         <p class="home_count_body">家长人数</p>
       </mu-flexbox-item>
     </mu-flexbox>
     <div class="home_bar">
        <span class="home_bar_yiYuan">{{account.dept && account.dept.hospitalName}}</span>
        <span class="home_bar_keShi">{{account.dept && account.dept.name}}</span>
        <mu-icon-button class="home_bar_icon" icon="settings"  @click="goToSetUp"/>
    </div>
    </div>
    <div class="home_context" >
      <mu-row gutter>
        <mu-col v-for="it in item" :key="it.key" width="25" tablet="30" desktop="25">
          <my-term-type  v-longtap="{fn:vuetouch,name:'长按',target:it}" :icons="it.icon" :title="it.name" :color="it.color" toRoute="/"></my-term-type>
        </mu-col>

      </mu-row>

      <mu-bottom-sheet  :open="bottomSheet" @close="closeBottomSheet">
          <mu-list>
            <mu-row gutter>
              <mu-col v-for="it in item" :key="it.key" width="25" tablet="30" desktop="25">
                <my-term-type  :icons="it.icon" :title="it.name" :color="it.color" toRoute="/"></my-term-type>
              </mu-col>

            </mu-row>

          </mu-list>
      </mu-bottom-sheet>
    </div>

  </div>



</template>

<script>
import store from '@/vuex/store';
import {mapState,mapMutations} from 'Vuex';
import term from './term';

export default {
  data(){
    return {
        timeOutEvent: 0,
        bottomSheet:false,
        sumPackage:0,
        packageGrowth:0,
        lastMonthSurvey:0,
    }
  },
  components:{
    'my-term-type':term
  },
  created(){
    this.add();
    this.loadDeptStatistics();
    var _this = this;
    
  },
  computed:{
    ...mapState(['item','account']),
    date:function(){
        var date = new Date();
        var day = ['日','一','二','三','四','五','六']
        return date.getFullYear()+'年'+(date.getMonth()+1)+"月"+date.getDate()+'日      星期'+day[date.getDay()];
    }
  },
  methods:{
    ...mapMutations(['add','loadDeptStatistics']),
    goToSetUp(){

      this.$router.push('/setup');
    },
    vuetouch(s,e){
      alert(this.account);
      e.preventDefault();
      this.bottomSheet = true;

    },
    openCamera(){

    },
    closeBottomSheet () {
      this.bottomSheet = false
    },
    openBottomSheet () {

      this.bottomSheet = true
    }
  },
  store
}
</script>


<style lang="less">
.home_container{
  background:#eee;
  width:100%;
  height:100%;
  .home_bar{
    width:calc(100%);
    height:45px;
    line-height:45px;
    background-color:#2ea594;
    color:#fff;
    text-align:center;
    position: fixed;
    border-bottom:2px solid #ccc;
    top:0;
    .home_bar_yiYuan{
      font-size:15px;
    }
    .home_bar_keShi{
      font-size:10px;
    }
    .home_bar_icon{
        float:right;

    }
  }
  .home_img_container{
    position:relative;
    margin-top:48px;
    max-height:180px;
    //overflow: hidden;
    .home_img_default{
      width:100%;
      margin-top:-5px;
      height: 180px;
    }
    .imgClass{
      position:absolute;
      bottom:-30px;
      left:11px;
      img{
        width:60px;
        height:60px;
      }
      
          
      

    }
  }
  .home_user{
    background-color:#fff;
    padding:10px 10px 10px 90px;
    .home_user_welcome{
      font-size:0.7rem;
    }
  }
  .home_count{
    margin-top:7px;
    background-color:#fff;
    padding:10px 0;
    .home_count_flex{
      line-height:40px;
      .home_count_head{
        height:30px;
        color:#245590;
        font-weight:bold;
        font-size:1.3rem;
        margin-top:5px;
      }
      .home_count_body{
        height:30px;
      }
    }
  }
  .home_context{
    min-height:200px;
    margin-top:7px;
    background-color:#fff;
    padding:10px;
    margin-bottom: 55px;
  }
}
</style>
