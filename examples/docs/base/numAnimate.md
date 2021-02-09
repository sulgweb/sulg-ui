<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# 数字动画
----
### 基础用法

<div class="demo-block">
  <su-num-animate :amount="3000"></su-num-animate>
</div>

::: demo
```html

  <su-num-animate :amount="561512111"></su-num-animate>

```
:::

### 千分位
<div class="demo-block">
  <su-num-animate :amount="123456789.123" thousand></su-num-animate>
</div>

::: demo
```html

  <su-num-animate :amount="123456789.123" thousand></su-num-animate>

```
:::


### 持续时间

<div class="demo-block">
  <su-num-animate :amount="123456789.123" :time="5000" thousand></su-num-animate>
</div>

::: demo
```html
<template>
  <su-num-animate :amount="123456789.123" :time="5000" thousand></su-num-animate>
<template>
```
:::


### 开始控制

<div class="demo-block">
  <div>
    <su-num-animate :amount="amountData" :time="5000" thousand :start="addNumStart"></su-num-animate>
  </div>
  <su-button @click="handleStart">开始</su-button>
</div>

::: demo
```html
<template>
  <div>
    <su-num-animate :amount="amountData" :time="5000" thousand :start="addNumStart"></su-num-animate>
  </div>
  <su-button @click="handleStart">开始</su-button>
</template>

<script>
export default {
    data() {
      return {
        addNumStart:false,
        amountData:123456789.123
      };
    },
    methods: {
      handleStart() {
        this.addNumStart = true
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
        addNumStart:false,
        amountData:123456789.123
      };
    },
    methods: {
      handleStart() {
        this.addNumStart = true
      }
    }
  }
</script>



## 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| amount | 显示的数字（必须） | Number | — |  |
| time | 持续时间 | Number | — | 1000 |
| start | 开始变化 | Boolean | — | true |
| thousand | 千分位 | Boolean | — | false |


