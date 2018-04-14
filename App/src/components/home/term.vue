<template>
  <div class="term_container">
    <div class="term_icom_container" v-bind:style="{backgroundColor:color}">
      <mu-icon-button class="term_icom" disabled  :to="toRoute">
        <mu-icon v-bind:value="icons" :size="33" color="#fff"/>

      </mu-icon-button>
    </div>

    <p>{{title}}</p>
  </div>



</template>

<script>
    export default {
      data(){
        return {

        }
      },
      props:['icons','title','toRoute','color']
    }
</script>


<style  lang="less">
  .term_container{

    text-align:center;
    margin-top:15px;
    .term_icom_container{

      width:50px;
      height:50px;
      border-radius:25px;
      margin:0 auto;
      .term_icom{
        text-align:center;
        padding:0px;
        i{
          margin-top:7px;
        }
      }
    }
  }
</style>
