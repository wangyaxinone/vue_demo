import Vue      from 'vue';
import Router   from 'vue-router';
import home     from '@/components/home/home';
import patient  from '@/components/Patient/Patient';
import message  from '@/components/message/message';
import queryAdd  from '@/components/queryAdd/queryAdd';
import index    from '@/components/index';
import setup    from '@/components/setup/setup';
import login    from '@/components/login/login';
import login_first    from '@/components/login/login_first';
import forgetPassword    from '@/components/login/ForgetPassword';
import myZhangHao    from '@/components/home/myZhangHao';
import xiuGaiXinXi    from '@/components/home/xiuGaiXinXi';
import xiuGaiMiMa    from '@/components/home/xiuGaiMiMa';
import liXianShuJu    from '@/components/home/liXianShuJu';
import liXianFangShi    from '@/components/home/liXianFangShi';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login_first',
      component: login_first
    },

    {
      path: '/index',
      name: 'Hello',
      component: index,
      children: [
        {path: '/home',name: '主页', component: home},
        {path: '/patient',name: '更多',component: patient},
        {path: '/message',name: '消息',component: message},
       // {path: '/',name: '快速添加',component: queryAdd}
      ]
    },
    {
      path: '/setup',
      name: '设置',
      component: setup
    },
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '/forgetPassword',
      name: '忘记密码',
      component: forgetPassword
    },
    {
      path: '/myZhangHao',
      name: '我的账号',
      component: myZhangHao
    },
    {
      path: '/xiuGaiXinXi',
      name: '修改个人信息',
      component: xiuGaiXinXi
    },
    {
      path: '/xiuGaiMiMa',
      name: '修改密码',
      component: xiuGaiMiMa
    },
    {
      path: '/liXianShuJu',
      name: '离线数据管理',
      component: liXianShuJu
    },
    {
      path: '/liXianFangShi',
      name: '离线方式',
      component: liXianFangShi
    },
    {
      path: '/login_first',
      name: '无密码登录',
      component: login_first
    },
  ]
});
