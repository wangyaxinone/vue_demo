<template>
  <div class="xinXi_container">
        
        <div class="body">
            <ul>
                <li>
                    <div class="title">手机</div><div class="context">
                        <div class="bangDing">更改绑定</div>
                       1383432443
                        
                    </div>
                    
                </li>
                <li>
                    <div class="title">性别</div><div class="context">
                        <mu-select-field v-model="genderIdx" :labelFocusClass="['label-foucs']">
                            <mu-menu-item v-for="text,index in gender" :key="index" :value="index" :title="text" />
                        </mu-select-field>
                    </div>
                </li>
                <li>
                    <div class="title">职称</div><div class="context">
                        <mu-select-field v-model="zhiChengIdx" :labelFocusClass="['label-foucs']">
                            <mu-menu-item v-for="text,index in zhiCheng" :key="index" :value="index" :title="text" />
                        </mu-select-field>
                    </div>
                </li>
                <li>
                    <div class="title">职务</div><div class="context">
                        <mu-select-field v-model="zhiWuIdx" :labelFocusClass="['label-foucs']">
                            <mu-menu-item v-for="text,index in zhiWu" :key="index" :value="index" :title="text" />
                        </mu-select-field>
                    </div>
                </li>
                <li>
                    <div class="title">备注</div><div class="context">
                        <textarea rows="3" v-model="note">
                        </textarea>
                    </div>
                </li>
            </ul>
        </div>
        <div class="header">
            <div class="baoCun">保存</div> 
            <div class="header_title">修改个人信息</div>    
            <mu-icon-button icon="keyboard_arrow_left" class="float-button" to="/setup" iconClass="float-button-icon"/> 
            
        </div>
  </div>
    


</template>

<script>
    import store from '@/vuex/store';
    import {mapState,mapMutations} from 'Vuex';
    export default {
        data(){
            return {
                genderIdx: 0,
                zhiChengIdx: 0,
                zhiWuIdx: 0,
                gender: ['男', '女'],
                zhiCheng:['请选择','初级教师','中级教师','副高级教师','高级教师'],
                zhiWu:['请选择','班主任','代课老师'],
                note:''
            }
        },
        store
       
        
    }
</script>


<style  lang="less">
    .xinXi_container{
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
                    padding:20px 0;
                    border-bottom:1px solid #ddd;
                    .title{
                        display:inline-block;
                        width:20%;
                        vertical-align: middle;
                       
                    }
                    .context{
                        display:inline-block;
                        width:80%;
                        vertical-align: middle;
                        line-height:30px;
                        .bangDing{
                            float:right;
                            height:30px;
                            line-height:30px;
                            text-align: center;
                            color:#fff;
                            width:80px;
                            border-radius: 5px;
                            background-color: #285b9a;
                        }
                        textarea{
                            width:100%;
                            border:1px solid #ddd;
                            border-radius: 5px;
                        }
                    }
                }
            }
        }
    }
</style>
