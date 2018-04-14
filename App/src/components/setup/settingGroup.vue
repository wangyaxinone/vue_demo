<template>
  <div class="settingGroup_container">
      <div class="setting_Title">
            <mu-icon class="img" :value="icons" :size="25"/>
            <span>多设备登录</span>
      </div>
      <div class="setting_body">
            
            <div class="setting_list" v-for="it in list" :key="it.key" @click="toRrl(it)">
                <img src="../images/icons/centerSettingNext.png" alt="">
                {{it.name}}
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
      props:['list','icons'],
      methods:{
            toRrl(obj){
                var url = obj.to;
                if(obj.key=='shaoYiShao'){
                    console.log(cordova.plugins);
                    cordova.plugins.barcodeScanner.scan(
                        function (result) {
                            alert("We got a barcode\n" +
                                    "Result: " + result.text + "\n" +
                                    "Format: " + result.format + "\n" +
                                    "Cancelled: " + result.cancelled);
                        }, 
                        function (error) {
                            alert("Scanning failed: " + error);
                        }
                    );
                }else{
                    this.$router.push(url)
                }
                
            }
      }
    }
</script>


<style lang="less">
  .settingGroup_container{
        margin-bottom:20px;
     
        .setting_Title{
            padding:10px 20px;
            background-color:#d2e0e8;
            .img{
                width:30px;
                vertical-align: middle;
            }
            span{
                margin-left:15px;
            }
        }
        .setting_body{
            padding:0px 20px;
            background-color: #fff;
            border:1px solid #ddd;
            img{
                float:right;
                width:15px;
                margin-top:10px;
            }
            .setting_list{
                border-bottom:1px solid #ddd;
                height:45px;
                line-height: 45px;
            }
        }
  }
</style>
