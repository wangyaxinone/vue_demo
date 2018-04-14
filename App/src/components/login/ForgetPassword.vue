<template>
  <div class="forgetPassword_container">
    <div class="header">
      <div class="header_title">忘记密码</div>    
      <mu-icon-button icon="android" class="float-button" to="/login" iconClass="float-button-icon"/>  
    </div>
    <div class="body">
      <div class="phoneNo">
         <img  src="../images/login_phoneBlack.png" />
         <span></span>
         <input type="text" placeholder="请输入手机号">
      </div>
      <div class="phoneMa">
        <input type="text" placeholder="请输入验证码">
        <div class="getYanZheng">点击获取</div>
      </div> 
      <div class="submit">
          提交
      </div> 
    </div> 
  </div>
</template>

<script>
    
    export default {
      data(){
        return {
         
        }
      },
      computed:{
      },
      
      methods:{
       
      }
    }
</script>


<style  lang="less">
    .forgetPassword_container{
      position: absolute;
      top:0;
      left:0;
      right:0px;
      bottom:0px;
      background-color:#fff;
        .header{
            height:45px;
            background-color: #285b9a;
            text-align: center;
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
        .body{
          padding:20px;
          .phoneNo,.phoneMa{
            border-bottom:1px solid #ccc;
            padding:10px 0;
            position: relative;
            img{
              width:20px;
              vertical-align: middle;
              margin-top:-5px;
            }
            span{
              border-right:1px solid #ccc;
              vertical-align: middle;
              padding:0 5px;
            }
            input{
              font-size: 14px;
              padding-bottom: 5px;
              border: none;
              outline: none;
              padding-left: 8px;
              vertical-align: middle;
            }
            .getYanZheng{
              border:1px solid #ccc;
              position: absolute;
              top:6px;
              right:0;
              padding:5px 15px;
              border-radius: 20px;
            }
          }
          .submit{
              width:100%;
              height:36px;
              text-align: center;
              line-height: 36px;
              margin-top:20px;
              background-color: #3a95ca;
              border:none;
              color: #fff;
           
          }
        }
    }
</style>
