<!--
 * @description: 
 * @author: 小羽
 * @github: https://github.com/sulgweb
 * @lastEditors: 小羽
 * @Date: 2020-10-27 00:29:37
 * @LastEditTime: 2020-10-28 13:42:47
 * @Copyright: 1.0.0
-->

<template>
  <div class="page-footer">
    <div class="footer-container">
      <div type="flex" justify="space-between">
        <div :span="12" class="text-left">
          <a href="https://sulgweb.github.io/">
            <img src="../assets/images/avater.jpg" width="80">
          </a>
          <div>
            <p>作者: 小羽</p>
            <p>邮箱: 821760648@qq.com </p>
            <div style="display:flex">
              <a href="https://blog.sulg.top" target="_blank" style="margin-right:16px">博客</a>
              <a href="https://github.com/sulgweb" target="_blank" style="margin-right:16px">Github</a>
              <a href="https://gitee.com/xiaoyu-web" target="_blank" style="margin-right:16px">Gitee</a>
              <a href="https://blog.csdn.net/fly821760648" target="_blank" style="margin-right:16px">CSDN</a>
              <a href="https://juejin.im/user/3597257778926973" target="_blank" style="margin-right:16px">掘金</a>
              <a href="https://www.jianshu.com/u/4ab50cbafc3f" target="_blank" style="margin-right:16px">简书</a>
              <a href="https://www.zhihu.com/people/xiao-yu-46-25-83" target="_blank" style="margin-right:16px">知乎</a>
            </div>
          </div>
        </div>
      </div>
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