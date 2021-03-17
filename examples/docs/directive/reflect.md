<!--
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-17 23:20:33
 * @LastEditTime: 2021-03-18 00:19:15
-->
<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# 倒影
----
### 基础用法

只需要添加`v-su-reflect`即可。

<div class="demo-block">
  <div v-su-reflect>
    SULG UI
  </div>
</div>

::: demo
```html

<template>
    <div class="demo-block">
        <div v-su-reflect>
            SULG UI
        </div>
    </div>
</template>

```
:::

### 自定义

`v-su-reflect`指令支持自定义参数。

<div class="demo-block">
  <div v-su-reflect="{direction:'below',empty:'1px',opacity:'0.5'}">
    SULG UI
  </div>
</div>

::: demo
```html

<template>
  <div class="demo-block">
    <div v-su-reflect="{direction:'below',empty:'1px',opacity:'0.5'}">
        SULG UI
    </div>
  </div>
</template>

```
:::





## 自定义参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | 方向 | String | below\|above\|left\|right | below |
| empty | 持续时间 | String | — | 0px |
| opacity | 开始变化 | Number | 0<opacity<=1 | 0.3 |


