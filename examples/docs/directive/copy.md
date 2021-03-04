<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-02-09 11:17:47
 * @LastEditTime: 2021-03-03 14:37:44
 * @Copyright: 1.0.0
-->

<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# 复制文本

**概述**

将传入的一段文本复制到剪贴板，自带默认提示事件。

----
### 基础用法

需要绑定id，回调事件事件。

<div class="demo-block">
  <div style="margin-bottom:16px">
    <su-input id="copyTest" v-model="value"/>
  </div >
  <su-button v-su-copy="{id:'copyTest'}">复制</su-button>

  <div style="margin-bottom:16px" id="copyTest1">
    12345678
  </div >
  <su-button v-su-copy="{id:'copyTest1'}">复制</su-button>
</div>


::: demo
```html

<template>
  <div class="demo-block">
    <div style="margin-bottom:16px">
      <su-input id="copyTest" v-model="value"/>
    </div >
    <su-button v-su-copy="{id:'copyTest'}">复制</su-button>
  </div>

  <div class="demo-block">
    <div style="margin-bottom:16px" id="copyTest1">
      12345678
    </div >
    <su-button v-su-copy="{id:'copyTest1'}">复制</su-button>
  </div>
</template>

<script>
export default {
    data() {
      return {
        value:"测试复制的文本"
      };
    },
  }
</script>


```
:::


<script>
export default {
    data() {
      return {
        value:"测试复制的文本"
      };
    },
  }
</script>



<!-- 
## 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| amount | 显示的数字（必须） | Number | — |  |
| time | 持续时间 | Number | — | 1000 |
| start | 开始变化 | Boolean | — | true |
| thousand | 千分位 | Boolean | — | false | -->


