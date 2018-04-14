import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  setItem:false,
  account:{
    dept:{
      hospitalName:'桃园路小学',
      name:''
    },
    dispName:'老师'
  },
  item:[
    {key:'anPai',name:'课程',to:'',icon:'book',isDelete:false,color:'#65cbda'},
    {key:'suiFang',name:'考试',to:'',icon:'people',isDelete:false,color:'#a689b7'},
    {key:'tixing',name:'提醒',to:'',icon:'message',isDelete:false,color:'#f3a9aa'},
    {key:'fenxi',name:'分析',to:'',icon:'home',isDelete:false,color:'#8ed8e3'},
    {key:'add',name:'添加',to:'',icon:'add',isDelete:false,color:'#f3a9aa'},
    
  ],
  dialog:{
    state:false,
    text:'',
    hasCen:false
  },
  patient_state:{
    all_patient:[
      {key:'1',name:'黄建',b:'三年级二班',age:'11'},
      {key:'2',name:'黄建',b:'三年级二班',age:'22'},
      {key:'3',name:'黄建',b:'三年级二班',age:'31'},
      {key:'4',name:'黄建',b:'三年级二班',age:'11'},
      {key:'5',name:'黄建',b:'三年级二班',age:'41'},
      {key:'6',name:'黄建',b:'三年级二班',age:'61'},
      {key:'7',name:'黄建',b:'三年级二班',age:'21'},
      {key:'8',name:'黄建',b:'三年级二班',age:'31'},
    ],
    filter_patient:[
      {key:'1',name:'黄建',b:'三年级二班',age:'11'},
      {key:'2',name:'高飞',b:'三年级二班',age:'22'},
      {key:'3',name:'王刚',b:'三年级二班',age:'31'},
      {key:'4',name:'武警刚',b:'三年级二班',age:'11'},
      {key:'5',name:'黄飞鸿',b:'三年级二班',age:'41'},
      {key:'6',name:'黄药师',b:'三年级二班',age:'61'},
      {key:'7',name:'郭药师',b:'三年级二班',age:'21'},
      {key:'8',name:'完颜阿骨打',b:'三年级二班',age:'31'},
    ],
    all_filter:{
      key:'fenZu',
      name:'全部分组',
      slectText:'全部分组',
      icon:'home',
      color:'red',
      list:[
        {key:'huanZheFenZu',type:'filter_text',name:'班级分组',icon:'',color:''},
        {key:'feiai1',type:'',name:'三年级一班',icon:'people',color:'red'},
        {key:'feiai2',type:'',name:'三年级二班',icon:'people',color:'red'},
        {key:'feiai3',type:'',name:'三年级三班',icon:'people',color:'red'},
        {key:'feiai4',type:'',name:'五年级二班',icon:'people',color:'red'},
        {key:'feiai5',type:'',name:'五年级三班',icon:'people',color:'red'},
        {key:'feiai6',type:'',name:'六年级一班',icon:'people',color:'red'},
      ]
    },
    all:{
      key:'all',
      name:'全部',
      slectText:'全部',
      icon:'home',
      color:'red',
      list:[
        {key:'feiai',name:'一小组',icon:'people',color:'red'},
        {key:'feiai',name:'二小组',icon:'people',color:'red'},
        {key:'feiai',name:'三小组',icon:'people',color:'red'},
      ]
    },
    createTime:{
      key:'createTime',
      name:'创建时间',
      slectText:'创建时间',
      icon:'home',
      color:'red',
      list:[{key:'feiai',name:'肺癌',icon:'people',color:'red'}]
    },
    huanzhe_count:{
      key:'people',
      name:'(340)',
      slectText:'(340)',
      icon:'home',
      color:'red'
      
    }
    
  },
  setting:[
    {key:'duoSheBei',name:'多设备登录',icons:'home',list:[
      {key:'shaoYiShao',name:'扫一扫',to:'/'}
    ]},
    {key:'gerenSheZhi',name:'个人设置',icons:'people',list:[
      {key:'zhanghao',name:'我的账号',to:'/myZhangHao'},
      {key:'xiugaiXinXi',name:'修改个人信息',to:'/xiuGaiXinXi'},
      {key:'xiuGaiMima',name:'修改密码',to:'/xiuGaiMiMa'}
    ]},
    {key:'lixianSheZhi',name:'离线设置',icons:'settings',list:[
      {key:'lixianShuJu',name:'离线数据管理',to:'/liXianShuJu'},
      {key:'LiXianFAngShi',name:'离线方式设置',to:'/liXianFangShi'}
    ]}
  ]
};
const mutations = {
  add(){
    if(state.setItem) return;
    var g_account = state.account;
    if (g_account.dept && g_account.dept.config && g_account.dept.config.advViewFilter) {
      var filterArry = state.account.dept.config.advViewFilter.map( function (filter, idx) {
          if (!filter.hideInHome)
              return {
                  key: filter.key,
                  name: filter.name,
                  icon: "people",
                  color: '#f3a9aa',
                  to: '/'
              };
      });
      if (g_account.centers && g_account.centers.length > 0) {
        filterArry.push({
            "key": "center",
            "name": "多中心",
            "icon": "people",
            "color": '#f3a9aa',
            "to": '/'
        });
      }
      filterArry.push({key:'add',name:'添加',to:'',icon:'add',isDelete:false,color:'#d6dee5'})
      state.item = state.item.concat(filterArry);
      state.setItem= true;
    }
  },
  loadDeptStatistics(){

  },
  openDialog(){
    state.dialog.state=true;
  },
  cloneDialog(){
    state.dialog.state=false;
  },
  comPoentsFn(){
    
  },
  succDialog(obj,fn){
    console.log(arguments);
    state.dialog.state=false;
    if(fn){
      return fn();
    }
  },
  setDialogText(obj,text){
    state.dialog.text = text;
  },
  login(obj,account){
    state.account = account?account:{};
  }
};
export default new Vuex.Store({
  state,
  mutations
});
