<template>
  <div class="liXianShuJu_container">
        
        <div class="body">
            <ul>
                <li>
                    <mu-list-item title="离线所有学生成绩" toggleNested :open="toggleNested">
                   
                    <mu-list-item slot="nested" >
                        <p>该操作将离线所有学生的成绩，可能会消耗较多的时间和流量，建议在WIFI环境下执行该操作</p>
                        <button class="button">执行</button>
                    </mu-list-item>
                    
                   
                    </mu-list-item>
                    
                </li>
                <li>
                    <mu-list-item title="更新学生成绩" toggleNested :open="toggleNested">
                   
                    <mu-list-item slot="nested" >
                        <p>当表单结构或样式发生变动，可以使用该功能来获取最新的学生成绩信息</p>
                        <button class="button">执行</button>
                    </mu-list-item>
                    
                   
                    </mu-list-item>
                    
                </li>
                <li>
                    <mu-list-item title="清除数据" toggleNested :open="toggleNested">
                   
                    <mu-list-item slot="nested" >
                        <p>清除设备中的缓存学生成绩等信息。缓存清除不会影响未提交的信息。</p>
                        <button class="button">执行</button>
                    </mu-list-item>
                    
                   
                    </mu-list-item>
                    
                </li>
                <li>
                    <mu-list-item title="清除本地存储" toggleNested :open="toggleNested">
                   
                    <mu-list-item slot="nested" >
                        <p>此操作会删除本地存储的文件，包括学生成绩，通讯记录。删除后无法恢复。</p>
                        <button class="button">执行</button>
                    </mu-list-item>
                    
                   
                    </mu-list-item>
                    
                </li>
                
            </ul>
        </div>
        <div class="header">
            <div class="header_title">离线数据管理</div>    
            <mu-icon-button icon="keyboard_arrow_left" class="float-button" to="/setup" iconClass="float-button-icon"/> 
            
        </div>
  </div>
    


</template>

<script>
    export default {
        data(){
            return {
                toggleNested:false  
            }
        },
        methods:{
            
        }
    }
</script>


<style  lang="less">
    .liXianShuJu_container{
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
                    color:#666;
                    p{
                        font-size:12px;
                        margin-bottom:10px;
                    }
                    .button{
                        background-color: #285b9a;
                        border:none;
                        color:#fff;
                        height:30px;
                        border-radius: 4px;
                        width:100%;
                    }
                }
            }
        }
    }
</style>
