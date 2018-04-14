<template>
  <div class="zhangHao_container">
        <div class="header">
            <div class="header_title">我的账号</div>    
            <mu-icon-button icon="keyboard_arrow_left" class="float-button" to="/setup" iconClass="float-button-icon"/>  
        </div>
        <div class="body">
            <div class="body_head">
                <div class="img_box">
                    <img  src="../../assets/avatar_female.png"  @click="getPic"/>
                </div>
            </div>
            <ul class="body_body">
                <li>
                    <div class="title">账号</div><div class="text">admin</div>
                    
                </li>
                <li>
                    <div class="title">姓名</div><div class="text">老师</div>
                    
                </li>
                <li>
                    <div class="title">所属学校</div><div class="text">桃园小学</div>
                    
                </li>
                <li>
                    <div class="title">所属职务</div><div class="text">班主任</div>
                    
                </li>
            </ul>
            <div class="body_foot" @click="setUP">
                <span>退出当前账号</span>
            </div>
        </div>
        <myDialog :dialog="dialog" @cloneDia="closeMyDialog" :succDialog='succDialog'></myDialog>
  </div>
    


</template>

<script>
    import store from '@/vuex/store';
    import {mapState,mapMutations} from 'Vuex';
    import myDialog from '@/components/myDialog.vue';
    export default {
        data(){
            return {
                pic:'../images/avatar_female.png',
                dialog:{
                    state:false,
                    text:'真的要退出吗？'
                }
            }
        },
        components:{
            'myDialog':myDialog
        },
        computed:{
            ...mapState(['account']),
           
        },
        store,
        methods:{
            getPic(e){
              
                navigator.camera.getPicture(onSuccess, onFail, {   
                    ity: 50,  
                    destinationType: Camera.DestinationType.DATA_URL ,
                    correctOrientation :true,
                    saveToPhotoAlbum  :true,
                    PictureSourceType:'PHOTOLIBRARY' 
                });  
                
                function onSuccess(imageData) {  
                    e.target.src = "data:image/jpeg;base64," + imageData;  
                }  
                
                function onFail(message) {  
                   console.log('取消拍照');
                } 
            },
            setUP(){
                this.dialog.state = true;
                this.dialog.text = '真的要退出吗？';
                
            } ,
            closeMyDialog(){
                this.dialog.state=false;
            },
            succDialog(){
                window.localStorage.removeItem("account");
                this.dialog.state = false
                this.$router.push('/')
            }
        }
    }
</script>


<style  lang="less">
    .zhangHao_container{
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
            }
        }
        .body{
            padding:20px;
            width:100%;
            .body_head{
                height:200px;
                padding-top:30px;
                .img_box{
                    width:100px;
                    height:100px;
                    border-radius: 50px;
                    overflow: hidden;
                    margin:0 auto;
                    img{
                        width:100px;
                    }
                }
            }
            .body_body{
                li{
                    width:100%;
                    height:40px;
                    border-top:1px solid #ddd;
                    .title{
                        width:30%;
                        display:inline-block;
                        line-height: 40px;
                        color: #285b9a;
                    }
                    .text{
                        width:70%;
                        display:inline-block;
                    }
                }
            }
            .body_foot{
                position: fixed;
                bottom:40px;
                left:0;
                right:0;
                text-align: center;
                span{
                    width:50%;
                    height:40px;
                    line-height:40px;
                    display: inline-block;
                    background-color: #5d99e3;
                    color:#fff;
                    border-radius: 5px;
                }
            }
        }
    }
</style>
