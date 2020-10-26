<!--
 * @description: 
 * @author: 小羽
 * @github: https://github.com/sulgweb
 * @lastEditors: 小羽
 * @Date: 2020-10-27 00:29:37
 * @LastEditTime: 2020-10-27 01:10:55
 * @Copyright: 1.0.0
-->

<template>
  <div class="page-footer">
    <div class="footer-container">
      <w-row type="flex" justify="space-between">
        <w-col :span="12" class="text-left">
          <a href="https://sulgweb.github.io/">
            <img src="../assets/images/avater.jpg" width="80">
          </a>
          <div>
            <p>author: xiaoyu</p>
            <p>email: 821760648@qq.com </p>
            <p>github: <a href="https://github.com/sulgweb">https://github.com/sulgweb</a></p>
          </div>
        </w-col>
      </w-row>
    </div>
  </div>
</template>


<style lang="less" type="text/less" scoped>
  .page-footer {
    padding: 30px 0 30px;
    color: #6190E8;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223,225,230,0.8);
    .footer-container{
      width: 90%;
      margin: 0 auto;
    }
    .text-left {
      font-size: 12px;
      display: flex;
      align-items: center;
      color: #5e6d82;
      img{
        border-radius: 100%;
        margin-right: 10px;
      }
      a {
        color: #6190E8;
      }
    }
  }

</style>