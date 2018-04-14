<template>
    <div class="message_group clearfix">
        <div class="img_box ">
            <div class="img">
                <img src="../images/avatar_female.png" alt="">
            </div>
        </div>
        <div class="name">
            小明父亲
        </div>
        <div class="time">
            2017-08-09
        </div>
    </div>

  <!-- tab-container -->

</template>

<script>
    export default {
      data(){
        return {
        }
      },
      methods:{
        
      }
    }
</script>


<style  lang="less">
    .clearfix:after {
        content:""; 
        display: block; 
        clear:both; 
    }
    .message_group{
        color:#666;
        background-color: #fff;
        padding:20px 20px;
        border-bottom:1px solid #ddd;
        
        .img_box{
            float:left;
            width:20%;
            .img{
                width:40px;
                height:40px;
                border:1px solid #ddd;
                border-radius: 20px;
                overflow: hidden;
                img{
                    width:40px;
                }
            }
        }
        .name{
            float:left;
            width:50%;
            height:40px;
            line-height: 40px;
        }
        .time{
            float:left;
            width:30%;
            height:40px;
            line-height: 40px;
        }
    }
</style>
