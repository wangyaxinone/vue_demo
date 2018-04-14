<template>
  <div class="patient_container">
    <div class="max_bg"></div>
    <div class="fixed_bar">
      <mu-appbar class="patient_appBar">
        <mu-icon-button icon="menu" slot="left"  @click="getMap"/>
        <mu-text-field icon="search" class="appbar-search-field"  slot="default" hintText="输入关键字或选择高级搜索"/>
        <mu-icon-button icon="expand_more" slot="right"/>
      </mu-appbar>
      <mu-flexbox class="patient_filter">
        <mu-flexbox-item class="flex-demo" >
          <filter-title :filter="patient_state.all_filter" ></filter-title>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo" >
          <filter-title :filter="patient_state.all" ></filter-title>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo" >
          <filter-title :filter="patient_state.createTime" ></filter-title>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo" >
          <filter-title :filter="patient_state.huanzhe_count" ></filter-title>
        </mu-flexbox-item>
        
      </mu-flexbox>
    </div>
    <div class="patient_body">
       
      <patient-list v-for="it in patient_state.filter_patient" :key="it.key" :list="it"></patient-list>  
        
    </div>
    <!-- tab-container -->
    
  </div>
</template>

<script>
    import filterTitle from './filter-title';
    import patientList from './patient-list';
    import store from '@/vuex/store';
    import {mapState,mapMutations} from 'Vuex'; 
    export default {
      data(){
        return {
          open: false,
          trigger: null,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          }
        }
      },
      store,
      computed:{
        ...mapState(['patient_state'])
      },
      components:{
        'filter-title':filterTitle,
        'patient-list':patientList
      },
      methods:{
        getMap(){
          console.log(this.patient_state);
        }
      }
    }
</script>


<style  lang="less">
.patient_container{
  background-color:#eee;
 
  .fixed_bar{
    position: fixed;
     width:100%;
     border-bottom:1px solid #ddd;
  }
  .patient_appBar{
    background-color:#2ea594;
  }
  .appbar-search-field{
    color: #FFF;
    margin-top:9px;
    &.focus-state {
      color: #FFF;
    }
    .mu-text-field-hint {
      color: fade(#FFF, 54%);
    }
    .mu-text-field-input {
      color: #FFF;
    }
    .mu-text-field-focus-line {
      background-color: #FFF;
    }
  }
  .patient_filter{
    background-color: #fff;
    
    .flex-demo {
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
    .patient_filter_button{
      box-shadow: none;
      color:#333;
      font-size:12px;
      font-weight:normal;
    }
  }

  .patient_body{
    width:100%;
    margin-top:116px;
    margin-bottom:80px;
  }
}
</style>
