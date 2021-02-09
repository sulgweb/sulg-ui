<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-02-09 11:17:47
 * @LastEditTime: 2021-02-09 11:32:58
 * @Copyright: 1.0.0
-->

<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# 防抖

**概述**

当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。

----
### 基础用法

需要绑定相关方法，触发事件和延迟时间。

<div class="demo-block">
  <div>{{num}}</div>
  <su-button v-su-debounce="[addNum,'click',1000]">防抖按钮</su-button>
</div>


::: demo
```html

<template>
  <div class="demo-block">
    <div>{{num}}</div>
    <su-button v-su-debounce="[addNum,'click',1000]">防抖按钮</su-button>
  </div>
</template>

<script>
export default {
    data() {
      return {
        num:0,
      };
    },
    methods: {
      addNum() {
        this.num++
      }
    }
  }
</script>


```
:::


<script>
export default {
    data() {
      return {
        num:0,
      };
    },
    methods: {
      addNum() {
        this.num++
      }
    }
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


