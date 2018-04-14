<template>
  <div class="xinXi_container">
        <div class="header">
            <div class="header_title">修改密码</div>    
            <mu-icon-button icon="keyboard_arrow_left" class="float-button" to="/setup" iconClass="float-button-icon"/> 
            
        </div>
        <div class="body">
            <ul>
                <li>
                    <div class="title">原密码</div><div class="context">
                        <input type="text">
                        <div style="color:red;">
                            不能为空
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div class="title">新密码</div><div class="context">
                        <input type="text">
                        <div style="color:#bbb;">
                            密码长度不少于6位，不多于20位
                        </div>
                        <div style="color:#bbb;">
                            至少包含大写字母、小写字母、数字、符号中的俩种
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div class="title">确认密码</div><div class="context">
                        <input type="text">
                       
                    </div>
                    
                </li>
            </ul>
            <div class="baoCun">
                <button type="button" :disabled="disabled">保存密码</button>
            </div>
        </div>
  </div>
    


</template>

<script>
    export default {
        data(){
            return {
                disabled:true
            }
        },
        methods:{
            
        }
    }
</script>


<style  lang="less">
    .xinXi_container{
        position: absolute;
        top:0;
        left:0;
        right:0px;
        bottom:0px;
        background-color:#fff;
        .header{
            height:45px;
            background-color: #2ea594;
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
                text-align: center;
            }
         
        }
        .body{
            padding:20px;
            ul{
                li{
                    padding:20px 0;
                    border-bottom:1px solid #ddd;
                    .title{
                        display:inline-block;
                        width:20%;
                        float: left;
                        margin-top: 10px;
                        color: #285b9a;
                    }
                    .context{
                        display:inline-block;
                        width:80%;
                        line-height:30px;
                        padding:0 10px;
                        input{
                            width:100%;
                            height:36px;
                            border-radius: 5px;
                            border:1px solid #ddd;
                        }
                    }
                }
            }
            .baoCun{
                padding:20px;
                text-align: center;
                button{
                    background-color: #2f6ab4;
                    color: #fff;
                    border:none;
                    width:100px;
                    height:30px;
                    border-radius: 3px;
                }
            }
        }
    }
</style>
