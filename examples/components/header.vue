<!--
 * @description: 
 * @author: 小羽
 * @github: https://github.com/sulgweb
 * @lastEditors: 小羽
 * @Date: 2020-10-27 00:29:37
 * @LastEditTime: 2021-01-21 10:50:54
 * @Copyright: 1.0.0
-->
<template>
  <header class="page-header">
    <div class="header-container">
      <router-link :to="{name: 'index'}"><img src="../assets/images/logo.jpg" width="80px"></router-link>
      <div class="header-container-github" @click="openGithub">
        <img style="width:48px;" src="../assets/images/github.jpg"/>github
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods:{
      openGithub(){
        window.open("https://github.com/sulgweb/sulg-ui/tree/release","blank")
      }
    }
  }
</script>

<style type="text/less" lang="less">
  @import "../assets/less/index";
  .page-header {
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1;
    background-color: #fff;
    box-shadow: 0 10px 30px 0 rgba(96, 96, 97, 0.07);
    opacity: 0.98;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
    .header-container{
      width: 96%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 80px;
      justify-content: space-between;
      overflow: hidden;
      &-github{
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }
</style>