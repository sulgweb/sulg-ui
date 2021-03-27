<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-03-12 14:31:24
 * @LastEditTime: 2021-03-24 15:01:13
 * @Copyright: 1.0.0
-->

<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# 文本按行省略
----
### 文字阴影/立体效果

需要传入 `type:'shadow'` , `value:3` , `shadowColor:'#a8a8a8'` (类型，阴影层数，阴影色)

<div class="demo-block">
  <div v-su-font="{value:3,type:'shadow',shadowColor:'#a8a8a8'}" style="font-size:36px;font-weight:600">
    SULG UI
  </div>
</div>

::: demo
```html

<template>
  <div class="demo-block">
    <div v-su-font="{value:3,type:'shadow'}" style="font-size:36px;font-weight:600">
      SULG UI
    </div>
  </div>
</template>

```
:::

### 氖光效果

通常运用氖光效果时，背景底色都是偏黑色。
需要传入 `type:'neon'` 和 `shadowColor:'#0ebeff'` (类型，阴影色)

<div class="demo-block">
  <div style="background:#000;color:#fff;height:100px;width:100%;font-size:60px;overflow:hidden;text-align:center;'">
    <div v-su-font="{shadowColor:'#0ebeff',type:'neon'}" style="font-weight:blod;">
      SULG UI
    </div>
  </div>
  
</div>

::: demo
```html

<template>
  <div class="demo-block">
    <div style="background:#000;color:#fff;height:100px;width:100%;font-size:60px;overflow:hidden;text-align:center;'">
      <div v-su-font="{shadowColor:'#0ebeff',type:'neon'}" style="font-weight:blod;">
        SULG UI
      </div>
    </div>
  </div>
</template>

```
:::

### 镂空效果

文字镂空效果，即留下边框，其余部分删除。
需要传入 `type:'hollowOut`,`color:'#707AE4'`,`line:'2px'`' (类型，颜色，边框大小)

<div class="demo-block">
  <div style="background:#000;height:100px;width:100%;font-size:60px;text-align:center;'">
    <div v-su-font="{color:'#707AE4',line:'2px',type:'hollowOut'}" style="font-weight:blod;">
      SULG UI
    </div>
  </div>
</div>

::: demo
```html

<template>
  <div class="demo-block">
    <div style="background:#000;height:100px;width:100%;font-size:60px;text-align:center;'">
      <div v-su-font="{color:'#707AE4',line:'2px',type:'hollowOut'}" style="font-weight:blod;">
        SULG UI
      </div>
    </div>
  </div>
</template>

```
:::



### 打字机效果

打字机效果。
需要传入 `type:'hollowOut`,`color:'#707AE4'`,`line:'2px'`' (类型，颜色，边框大小)

<div class="demo-block">
  <div>
    <div v-su-font="{value:'豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；',type:'typer'}" style="font-weight:blod;">
    </div>
  </div>
</div>

::: demo
```html

<template>
  <div class="demo-block">
    <div style="background:#000;height:100px;width:100%;font-size:60px;text-align:center;'">
      <div v-su-font="{color:'#707AE4',line:'2px',type:'hollowOut'}" style="font-weight:blod;">
        SULG UI
      </div>
    </div>
  </div>
</template>

```
:::




<!-- 
## 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| amount | 显示的数字（必须） | Number | — |  |
| time | 持续时间 | Number | — | 1000 |
| start | 开始变化 | Boolean | — | true |
| thousand | 千分位 | Boolean | — | false | -->


