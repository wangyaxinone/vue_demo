<template>
  <div class="patient_list_container">
   <mu-paper class="demo-paper" :zDepth="1" >
        <mu-row gutter class="mu-row">
            <mu-col width="20" tablet="20" desktop="20">
                <div class="photo_box">
                    <img class="photo" src="http://img1.imgtn.bdimg.com/it/u=3920398476,1501488149&fm=27&gp=0.jpg" alt="">
                </div>
            </mu-col>
           <mu-col width="20" tablet="20" desktop="20">
              <span>{{list.name}}</span>  
            </mu-col>
            <mu-col width="20" tablet="20" desktop="20">
                {{list.age}}
            </mu-col>
            <mu-col class="mu-row-last" width="40" tablet="40" desktop="40">
               --
            </mu-col>
        </mu-row>
        <mu-row gutter class="mu-row">
          
            <mu-col width="80" tablet="80" desktop="80">
                {{list.b}}
            </mu-col>
            <mu-col class="mu-row-last" width="20" tablet="20" desktop="20">
               --
            </mu-col>
        </mu-row>
   </mu-paper>
  </div>
</template>

<script>
    export default {
        data(){
            return {
              a:'111' 
            }
        },
        props:['list',],
    }
</script>


<style  lang="less">
    .patient_list_container{
        width:100%;
        height:80px;
        margin-top:20px;
        .demo-paper {
            padding:10px;
            height: 90px;
            .mu-row{
                padding:2px 0px;
                .photo_box{
                    width:50px;
                    height:50px;
                    border-radius: 25px;
                    background-color: #333;
                    overflow: hidden;
                    .photo{
                        width:50px;
                        height:50px;
                        
                    }
                }
                .mu-row-last{
                    text-align: right;
                }
            }
            
            
        }
    }
</style>
