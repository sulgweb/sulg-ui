<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-02-09 15:17:52
 * @LastEditTime: 2021-02-09 16:09:21
 * @Copyright: 1.0.0
-->
<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-02-09 10:28:33
 * @LastEditTime: 2021-02-09 14:14:27
 * @Copyright: 1.0.0
-->
<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# Input 输入框
----
### 基础用法

基本用法，可以使用 v-model 实现数据的双向绑定。

可以直接设置 style 来改变输入框的宽度，默认 100%。

<div class="demo-block">
  <su-input v-model="value"/>
</div>

::: demo
```html

<template>
  <div class="demo-block">
    <su-input v-model="value"/>
  </div>
</template>

<script>
export default{
  data(){
    return {
      value:""
    }
  }
}
</script>

```
:::

<script>
export default{
  data(){
    return {
      value:""
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


