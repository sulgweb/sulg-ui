<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# Tag 标签
----
### 基础用法
由`type`属性来选择tag的类型。

<div class="demo-block">
  <su-tag>标签一</su-tag>
  <su-tag type="error">标签二</su-tag>
  <su-tag type="warning">标签三</su-tag>
  <su-tag type="success">标签四</su-tag>
  <su-tag type="default">标签五</su-tag>
  <su-tag type="info" >标签六</su-tag>
</div>

::: demo
```html

  <su-tag>标签一</su-tag>
  <su-tag type="error">标签二</su-tag>
  <su-tag type="warning">标签三</su-tag>
  <su-tag type="succcess">标签四</su-tag>
  <su-tag type="default">标签五</su-tag>
  <su-tag type="info">标签六</su-tag>

```
:::


### 开启圆角
由`round`属性来选择是否开启圆角。

<div class="demo-block">
  <su-tag round>标签一</su-tag>
  <su-tag type="error" round>标签二</su-tag>
  <su-tag type="warning" round>标签三</su-tag>
  <su-tag type="success" round>标签四</su-tag>
  <su-tag type="default" round>标签五</su-tag>
  <su-tag type="info" round>标签六</su-tag>
</div>

::: demo
```html

  <su-tag round>标签一</su-tag>
  <su-tag type="error" round>标签二</su-tag>
  <su-tag type="warning" round>标签三</su-tag>
  <su-tag type="success" round>标签四</su-tag>
  <su-tag type="default" round>标签五</su-tag>
  <su-tag type="info" round>标签六</su-tag>

```
:::


----
### 开启背景色
由`bgColor`属性来开启背景色，默认为false。

<div class="demo-block">
  <su-tag bgColor>标签一</su-tag>
  <su-tag type="error" bgColor>标签二</su-tag>
  <su-tag type="warning" bgColor>标签三</su-tag>
  <su-tag type="success" bgColor>标签四</su-tag>
  <su-tag type="default" bgColor>标签五</su-tag>
  <su-tag type="info" bgColor>标签六</su-tag>
</div>

::: demo
```html

  <su-tag bgColor>标签一</su-tag>
  <su-tag type="error" bgColor>标签二</su-tag>
  <su-tag type="warning" bgColor>标签三</su-tag>
  <su-tag type="success" bgColor>标签四</su-tag>
  <su-tag type="default" bgColor>标签五</su-tag>
  <su-tag type="info" bgColor>标签六</su-tag>

```
:::



### 可移除标签
设置```closable```属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，它接受一个Boolean，true 为关闭。
<div class="demo-block">
<su-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)" :type="tag.type">
  {{tag.name}}
</su-tag>
<script>
export default {
    data() {
      return {
        dynamicTags: [{
           name: '标签一',
           type: 'primary' 
        }, {
           name: '标签二',
           type: 'error' 
        }, {
           name: '标签三',
           type: 'warning'           
        }, {
            name: '标签四',
            type: 'success'
        }]
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    }
  }
</script>
</div>

::: demo
```html

<su-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)" :type="tag.type">
  {{tag.name}}
</su-tag>
<script>
export default {
    data() {
      return {
        dynamicTags: [{
            name: '标签一',
            type: 'primary' 
        }, {
           name: '标签二',
           type: 'success' 
        }, {
           name: '标签三',
           type: 'info'           
        }, {
            name: '标签四',
            type: 'error'
        }]
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    }
  }
</script>

```
:::

## 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 用于触发关闭事件时的回调 | Boolean | — | false |
| color | 类型 | String |  `primary`, `error`, `warning`, `success`,`default`, `info` | primary |
| closable | 是否可关闭 | Boolean | — | false |

## Tag 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| close | 点击关闭按钮时触发 | event |
