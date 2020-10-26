<!--
 * @description: 
 * @author: 小羽
 * @github: https://github.com/sulgweb
 * @lastEditors: 小羽
 * @Date: 2020-10-26 23:52:29
 * @LastEditTime: 2020-10-27 01:35:23
 * @Copyright: 1.0.0
-->
<template>
  <div id="app">
    <div>
      <mainHeader></mainHeader>
      <div class="container" v-if="!isIndex">
        <sideNav class="nav"></sideNav>
        <router-view class="view"></router-view>
      </div>
      <router-view class="container" v-else></router-view>
      <mainFooter></mainFooter>
    </div>
  </div>
</template>

<script>
  import mainHeader from './components/header.vue'
  import mainFooter from './components/footer.vue'
  import sideNav from './components/side-nav.vue'

  export default {
    name: 'app',
    data () {
      return {
        init: false,
        isIndex: true
      }
    },
    watch: {
      $route () {
        this.isIndex = this.$route.name === 'index'
      }
    },
    mounted () {
      //  这里模拟数据请求
      setTimeout(() => {
        this.init = true
      }, 250)
    },
    components: {
      mainHeader,
      sideNav,
      mainFooter,
    }
  }
</script>

<style lang="less" type="text/less">
  @import "./assets/less/index";

  .demo-block{
    padding: 32px;
    border: 1px solid #e2ecf4;
    border-radius: 4px 4px 0 0;
    background-color: #fff;
    margin-top: 16px;
  }
  .container {
    margin: 105px auto 30px auto;
    width: 90%;
    padding: 20px 30px;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    min-height: calc(100vh - 320px);
    .nav {
      float: left;
      width: 210px;
    }
    .view {
      float: left;
      width: calc(~'100% - 215px');
      padding: 32px 48px 48px;
      box-sizing: border-box;
    }
  }

  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
