<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# Modal模态框
----
### 基础用法

<div class="demo-block">
  <su-modal title="title" v-model="modalVisable1">
    <div>666</div>
    <div>666</div>
    <div>666</div>
  </su-modal>
  <su-button @click="openModal1">打开模态框</su-button>
</div>

::: demo
```html
<template>
  <div class="demo-block">
    <su-modal title="title" v-model="modalVisable1">
      <div>666</div>
      <div>666</div>
      <div>666</div>
    </su-modal>
    <su-button @click="openModal1">打开模态框</su-button>
  </div>
<template>

<script>
export default {
    data() {
      return {
        modalVisable1:false,
      };
    },
    methods: {
      openModal1() {
        this.modalVisable1 = true
      }
    }
  }
</script>

```
:::

### js方法调用
<div class="demo-block">
  <su-button @click="openModal2">打开模态框</su-button>
</div>

::: demo
```html
<template>
  <su-button @click="openModal2">打开模态框</su-button>
<template>
<script>
export default {
    data() {
      return {
        modalVisable1:false,
      };
    },
    methods: {
      openModal2(){
        this.$SuModal({title:"标题"})
      }
    }
  }
</script>
```
:::


### 持续时间

<div class="demo-block">
  <su-num-animate :amount="123456789.123" :time="5000" thousand></su-num-animate>
</div>

::: demo
```html

  <su-num-animate :amount="123456789.123" :time="5000" thousand></su-num-animate>

```
:::




<script>
export default {
    data() {
      return {
        modalVisable1:false,
      };
    },
    methods: {
      openModal1() {
        this.modalVisable1 = true
      },
      openModal2(){
        this.$SuModal({title:"标题",content:"modal中的内容"})
      }
    }
  }
</script>
</div>



## 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| amount | 显示的数字（必须） | Number | — |  |
| time | 持续时间 | Number | — | 1000 |
| start | 开始变化 | Boolean | — | true |
| thousand | 千分位 | Boolean | — | false |


