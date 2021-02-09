<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-02-09 11:17:47
 * @LastEditTime: 2021-02-09 14:02:15
 * @Copyright: 1.0.0
-->

<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# 节流

**概述**

当持续触发事件时，保证一定时间段内只调用一次事件处理函数。节流通俗解释就比如我们水龙头放水，阀门一打开，水哗哗的往下流，秉着勤俭节约的优良传统美德，我们要把水龙头关小点，最好是如我们心意按照一定规律在某个时间间隔内一滴一滴的往下滴。

----
### 基础用法

需要绑定相关方法，触发事件和延迟时间。

<div class="demo-block">
  <div>{{num}}</div>
  <su-button v-su-throttle="[addNum,'click',1000]">节流按钮</su-button>
</div>


::: demo
```html

<template>
  <div class="demo-block">
    <div>{{num}}</div>
    <su-button v-su-throttle="[addNum,'click',1000]">节流按钮</su-button>
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


### 立即执行

点击后，立即执行一次，然后是正常的节流。需要添加第四个参数为true。

<div class="demo-block">
  <div>{{num1}}</div>
  <su-button v-su-throttle="[addNum1,'click',1000,true]">节流按钮（立即执行）</su-button>
</div>


::: demo
```html

<template>
  <div class="demo-block">
    <div>{{num1}}</div>
    <su-button v-su-throttle="[addNum1,'click',1000,true]">节流按钮（立即执行）</su-button>
  </div>
</template>

<script>
export default {
    data() {
      return {
        num1:0,
      };
    },
    methods: {
      addNum1() {
        this.num1++
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
        num1:0
      };
    },
    methods: {
      addNum() {
        this.num++
      },
      addNum1() {
        this.num1++
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


