<template>
  <div class="liXianFangShi_container">
        
        <div class="body">
           
            <ul>
                <li>
                    <p :class="active=='liJiTiJiao'?'active':''" @click="tiJiaoType('liJiTiJiao')">立即提交</p>                    
                </li>
                <li>
                    <p :class="active=='caoGaoXiang'?'active':''"  @click="tiJiaoType('caoGaoXiang')">保存到草稿箱</p>                    
                </li>
                
            </ul>
        </div>
        <div class="header">
            <div class="header_title">离线方式设置</div>    
            <mu-icon-button icon="keyboard_arrow_left" class="float-button" to="/setup" iconClass="float-button-icon"/> 
            
        </div>
  </div>
    


</template>

<script>
    export default {
        data(){
            return {
                toggleNested:false,
                active:'liJiTiJiao' 
            }
        },
        methods:{
            tiJiaoType(type){
                if(type=='caoGaoXiang'){
                    this.active='caoGaoXiang';
                }else{
                    this.active='liJiTiJiao';
                }
            }
        }
    }
</script>


<style  lang="less">
    .liXianFangShi_container{
        position: fixed;
        top:0;
        left:0;
        right:0px;
        bottom:0px;
        background-color:#fff;
        .header{
            position: fixed;
            top:0;
            width:100%;
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
            .baoCun{
                position: absolute;
                right:10px;
                height:45px;
                line-height: 45px;
                color: #fff;
                font-size: 14px;
                margin-right:10px;
            }
        }
        .body{
            margin-top:45px;
            padding:20px;
            ul{
                li{
                    border-bottom:1px solid #ddd;
                    height:45px;
                    p{
                        height:45px;
                        line-height:45px;
                        padding:0 10px;
                    }
                    p.active{
                        background-color: #7fbad7;
                        color:#fff;
                    }
                }
            }
        }
    }
</style>
