<template>
  <div class="patient_filter_container">
    <div class="filter_text" @click="dropdownUP(filter.list,$event)">
        <mu-icon class="filter_icon" :value="filter.icons" :size="20"/>
        <span>{{filter.slectText}}</span>
    </div>
    <div class="filter_list" v-if="listShow" @click="dropdownHide">
        <div class="filter_list_icon" v-bind:style="{left:left}"></div>
        <div  class="filter_list_container">
            <ul>
                <li class="filter_title" @click="filter_li">
                {{filter.slectText}}
                </li>
                <li v-for="it in filter.list" :key="it.key" @click="filter_li" v-bind:class="it.type">
                    <mu-icon class="fenzu_icon"  :value="it.icon" :size="16" color="#2ea594"/>
                    <a href="javascript:void(0)">{{it.name}}</a>
                </li>
            </ul>   
        </div>
        
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                listShow:false,
                left:'95px'
            }
        },
        props:['filter'],
        methods:{
            dropdownUP(list,e){
                if(list && list.length>0){
                    var left = e.x-30;
                    if(left<22){
                        left = 12;
                    }else if(left>window.innerWidth-50){
                        left = window.innerWidth-80
                    }
                    this.listShow=true;
                    this.left=left+'px';
                }
                    
            },
            filter_li(e){
                console.log(this);
                console.log(e);
            },
            dropdownHide(e){
                if(e.target.nodeName=='LI' ||e.target.nodeName=='A' ){

                }else{
                    this.listShow=false;
                }
                
            }
        }
    }
</script>


<style  lang="less">
    .patient_filter_container{
        .filter_text{
            .filter_icon{
                vertical-align: middle;
                margin-top:-3px;
            }
        }
        .filter_list{
            padding:6px 22px;
            position: fixed;
            width:100%;
            height:100%;
            top:0;
            left:0;
            right:0;
            bottom:0;
            background-color: rgba(0, 0, 0, 0.4);
            .filter_list_icon{
                position: relative;
                width:0;
                height:0;
                overflow:hidden;
                font-size: 0;     /*是因为, 虽然宽高度为0, 但在IE6下会具有默认的 */
                line-height: 0;  /* 字体大小和行高, 导致盒子呈现被撑开的长矩形 */
                border-width:10px;
                border-style:solid dashed dashed dashed;/*IE6下, 设置余下三条边的border-style为dashed,即可达到透明的效果*/
                border-color: transparent transparent #fff transparent;
                top:96px;
            }
            .filter_list_container{
                max-height: 300px;
                overflow-y: scroll;
                 background-color: #fff;
                position: relative;
                top:95px;
                width:100%;
                border-radius: 6px;
                
                ul{
                   padding-top:40px;
                    li.filter_title{
                        background-color:#d6dbea;
                        border-top-left-radius: 6px;
                        border-top-right-radius: 6px;
                        position: fixed;
                        right: 22px;
                        left: 22px;
                        top:121px;
                    }
                    li.filter_text{
                        background-color: #eee;
                       color:#2ea594;
                    }
                    li{
                        a{
                            color:#666;
                        }
                        text-align: left;
                        padding:0px 12px;
                        height:40px;
                        line-height:40px;
                        border-bottom: 1px solid #ddd;
                        .fenzu_icon{
                            vertical-align: middle;
                            margin-top:-3px;
                        }
                    }
                }   
            }
            
        }
    }
</style>
