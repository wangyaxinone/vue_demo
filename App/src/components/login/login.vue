<template>
  <div class="login_container" >
    <div class="main">
      <div class="login_img">
        <img src="../images/login_logo.png" alt="Alternate Text" />
        <div>桃 李 天 下</div>
      </div>
      <div class="logindiv">
        <table style="width:100%" v-if="!phonePassword">
            <tr>
                <td class="iconTd">
                    <img style="margin-bottom:6px;" src="../images/iconuser.png" />

                </td>
                <td class="iconHolder"><div></div></td>
                <td class="inputContainer">
                    <input type="text" v-model="email" placeholder="请输入账号" class="txt-username" data-toggle="dropdown" />
                    <ul class="dropdown-menu"></ul>
                </td>
            </tr>
            <tr style="border:0px;">
                <td class="middleHolder" colspan="3"></td>
            </tr>
            <tr>
                <td class="iconTd">
                    <img src="../images/iconpassword.png" />
                </td>
                <td class="iconHolder"><div></div></td>
                <td class="inputContainer">
                    <input class="txt-password" v-model="passwordHash" placeholder="请输入密码" type="password" />
                </td>
            </tr>
           
        </table>
        <table style="width:100%" v-if="phonePassword">
            <tr>
                <td class="iconTd">
                    <img style="margin-bottom:6px;" src="../images/login_phone.png" />

                </td>
                <td class="iconHolder"><div></div></td>
                <td class="inputContainer">
                    <input type="text" placeholder="请输入手机号" class="phone-username" data-toggle="dropdown" />
                    <!--<ul class="dropdown-menu"></ul>-->
                </td>
            </tr>
            <tr style="border:0px;">
                <td class="middleHolder" colspan="3"></td>
            </tr>
            <tr>
                <td class="iconTd">
                    <img src="../images/iconpassword.png" />
                </td>
                <td class="iconHolder"><div></div></td>
                <td class="inputContainer pwBtn_relative">
                    <div class="phone-password pwInput ">
                        <input id="validatecode" class="phone-PWD" placeholder="请输入动态密码" type="text" disabled />
                    </div>
                    <div class="pwBtn">
                        <div id="btn_getdynamiccode" class="radbutton">点击获取</div>
                    </div>
                </td>
            </tr>
        </table>
        <div class="WANGjImImA">
          <span @click="getPassword">忘记密码</span>
        </div>
        <div class="submit">
          <button type="button" @click="submit">登录</button>
        </div>
        <div class="phone_password" @click="usePhonePassword">
          <span v-if="phonePassword">使用账号密码登录</span>
          <span v-if="!phonePassword">使用短信动态密码登录</span>
        </div>
        <div class="noEmall">
            <span @click="open">没有账号</span>
            <mu-dialog :open="dialogLogin" title="尊敬的老师" @close="close">
                <div class="noEmall_dialog_body">
                    <span class="noEmall_title">请留下您的联系方式，我们将尽快与您联系。</span>
                    <mu-text-field hintText="电话号码" errorText="这是必填项" type="number" icon="phone"/><br/>
                    <mu-text-field hintText="简介" multiLine :rows="3" :rowsMax="6" icon="comment"/><br/>
                    <button class="noEmall_submit">提交</button>
                </div>
                <mu-flat-button slot="actions" primary @click="close" label="关闭"/>
            </mu-dialog>
        </div>
    </div>
    </div>    
      
    <myDialog :dialog="dialog" @cloneDia="closeMyDialog" :succDialog='succDialog'></myDialog>
  </div>



</template>

<script>
import myDialog from '@/components/myDialog.vue';
import store from '@/vuex/store';
import {mapState,mapMutations} from 'Vuex'; 
export default {
    data(){
        return {
                phonePassword:false,
                dialogLogin: false,
                email:'jiangzy@boshicloud.com',
                passwordHash:'1234567@',
                dialog:{
                    state:false,
                    text:'真的要退出吗？'
                }
            }
        },
    components:{
        'myDialog':myDialog
    },
    store,
    methods:{
        ...mapMutations(['login']),
        submit(e){
            var _this = this;
            var body = {
            email: this.email,
            passwordHash:this.passwordHash
            }
            e.target.innerHTML = '登录中...';
            e.target.disabled = true;
            setTimeout(()=>{
                _this.$router.push('/home')
            },1000)

            // this.$ajax({
            //         url: 'http://dev.boshicloud.com/api/Login',
            //         method: 'POST',
            //         data: body,
            //         responseType:'json',
            //         headers:{
            //             "X-MEDI-PRODUCT": 'DoctorPhone',
            //             "X-MEDI-VERSION":'2.8.3'
            //         }
            //     })
            //     .then(function (res) {
            //         if (res.data.success) {
            //             window.localStorage.setItem('account',JSON.stringify(res.data.result));
            //             _this.login(res.data.result);
            //             _this.$router.push('/home')
            //         }else{
            //             _this.dialog.state = true;
            //             _this.dialog.text =  res.data.error;
            //             e.target.innerHTML = '登录';
            //             e.target.disabled = false;
            //         }
            //     })
            //     .catch(function (error) {
            //         _this.dialog.state = true;
            //         _this.dialog.text = '账号或密码不正确';
            //         e.target.innerHTML = '登录';
            //         e.target.disabled = false;
            //     });
            //
        },
        usePhonePassword(){
            this.phonePassword=!this.phonePassword;
        },
        open () {
        this.dialogLogin = true
        },
        close () {
        this.dialogLogin = false
        },
        getPassword(){
            this.$router.push('/forgetPassword')
        },
        closeMyDialog(){
            this.dialog.state=false;
        },
        succDialog(){
            this.dialog.state = false
        }
    }
}
</script>


<style lang="less">

  .login_container{
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background:url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3658907492,3872808117&fm=27&gp=0.jpg) center ;
     background-size: cover;
    .main{
        padding: 20px;
        background: none;
        background-color:rgba(0,0,0,0.6);
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
    }

    .login_img{
        margin-top:50px;
        height:15%;
        text-align: center;
        img{
            width:19%;
        }
        color: #fff;
    }
    .logindiv {
      /*padding: 0px 15px 0px 15px;*/
      margin: auto;
      margin-top:15%;
      padding: 0 7%;

        tr{
            border-bottom:1px solid #fff;
        }

        .iconTd {
            width: 30px;
            font-size: 18px;
            padding-top: 16px;

            > img {
                height: 26px;
                margin-bottom:6px;
            }
        }

        .iconHolder{
            >div{
                width:1px;height:12px;background-color:#fff;
                margin-bottom: -12px;
            }
        }

        .middleHolder{
            width:100%;
            display:block;
            height:25px;
        }
        .pwBtn_relative{
            position: relative;
        }
        .inputContainer {
            border-bottom: 1px solid #fff;
            padding-top: 16px;
            .pwBtn{
                    display:inline-block;
                    width:40%;
                    position: absolute;
                    right:0;
                    top:20px;
                    #btn_getdynamiccode {
                        width: 100%;
                        height: 24px;
                        font-size: 14px;
                        color: white;
                        background-color: transparent;
                        padding: 0px;
                        border: 1px solid #fff;
                        border-radius: 12px;
                        text-align: center;
                    }
                }
        }

        input[type] {
            background: transparent;
            font-size: 14px;
            color: #fff;
            padding-bottom: 5px;
            border: none;
            width: 100%;
            outline: none;
            padding-left:8px;
        }
        .submit{
            button{
                background: transparent;
                width:100%;
                height:36px;
                color: #fff;
                outline: none;
                border:1px solid #fff;
                border-radius: 5px;
            }
        
        }
        .WANGjImImA{
            text-align: right;
            color:#fff;
            padding:10px 0;
        }
        .phone_password{
            text-align: center;
            color:#fff;
            padding:10px 0;
            font-size: 13px;
        }
        .noEmall{
            position: relative;
            top:80px;
            text-align: center;
            left:0px;
            right:0px;
            color:#fff;
            font-size: 13px;
            .noEmall_dialog_body{
                
            }
        }
    }
    
}
.mu-text-field{
    width:100%; 
}
.noEmall_title{
    font-size:12px;
}
.noEmall_submit{
    background: #285b9a;
    width: 100%;
    height: 36px;
    color: #fff;
    outline: none;
    border: 1px solid #fff;
    border-radius: 5px;
}
</style>
