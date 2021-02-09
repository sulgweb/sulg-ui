<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# 虚拟滚动

**概述**

常用于长列表的渲染，仅渲染可视界面部分，节省渲染的开支。

----
### 基础用法

<div class="demo-block">
  <su-virtual-scroll id="test" style="height:50vh" :realList="list" :itemSize="itemSize" v-model="virtualList">
    <div 
      v-for="item in virtualList"
      :key="item.id" 
      :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }">
        <span>{{item.value}}</span>
    </div>
  </su-virtual-scroll>
</div>

::: demo
```html

<template>
  <su-virtual-scroll id="test" style="height:50vh" :realList="list" :itemSize="itemSize" v-model="virtualList">
    <div 
      v-for="item in virtualList" 
      :key="item.id" 
      :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }">
        <span>{{item.value}}</span>
    </div>
  </su-virtual-scroll>
</template>

<script>
export default {
    data() {
      return {
        list:[
          {id:1,value:1},
          {id:2,value:2},
          {id:3,value:3},
          {id:4,value:4},
          {id:5,value:5},
          {id:6,value:6},
          {id:7,value:7},
          {id:8,value:8},
          {id:9,value:9}
        ],
        virtualList:[],
        itemSize:200,
      };
    },
    methods: {
    }
  }
</script>
```
:::

### 行内多个Item
有时候一行需要渲染多个item时，可以通过修改lineNum完成渲染

<div class="demo-block">
  <su-virtual-scroll id="test1" style="height:50vh" :lineNum="2" :realList="list1" :itemSize="itemSize" v-model="virtualList1">
    <div class="virtualList1">
      <div
        class="virtualList1-item" 
        v-for="item in virtualList1" 
        :key="item.id" 
        :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }">
          <span>{{item.value}}</span>
      </div>
    </div>
  </su-virtual-scroll>
</div>

::: demo
```html

<template>
  <su-virtual-scroll id="test1" style="height:50vh" :lineNum="2" :realList="list1" :itemSize="itemSize" v-model="virtualList1">
    <div class="virtualList1">
      <div
        class="virtualList1-item" 
        v-for="item in virtualList1" 
        :key="item.id" 
        :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }">
          <span>{{item.value}}</span>
      </div>
    </div>
  </su-virtual-scroll>
</template>

<script>
export default {
    data() {
      return {
        list1:[
          {id:1,value:1},
          {id:2,value:2},
          {id:3,value:3},
          {id:4,value:4},
          {id:5,value:5},
          {id:6,value:6},
          {id:7,value:7},
          {id:8,value:8},
          {id:9,value:9},
          {id:10,value:10},
          {id:11,value:11},
          {id:12,value:12},
          {id:13,value:13},
          {id:14,value:14},
          {id:15,value:15}
        ],
        virtualList1:[],
        itemSize:200,
      };
    },
    methods: {
    }
  }
</script>
<style scoped>
  .virtualList1{
    display:flex;
    flex-wrap:wrap
  }
  .virtualList1-item{
    width:50%
  }
</style>
```
:::


<script>
export default {
    data() {
      return {
        list:[
          {id:1,value:1},
          {id:2,value:2},
          {id:3,value:3},
          {id:4,value:4},
          {id:5,value:5},
          {id:6,value:6},
          {id:7,value:7},
          {id:8,value:8},
          {id:9,value:9},
        ],
        virtualList:[],
        itemSize:200,

        list1:[
          {id:1,value:1},
          {id:2,value:2},
          {id:3,value:3},
          {id:4,value:4},
          {id:5,value:5},
          {id:6,value:6},
          {id:7,value:7},
          {id:8,value:8},
          {id:9,value:9},
          {id:10,value:10},
          {id:11,value:11},
          {id:12,value:12},
          {id:13,value:13},
          {id:14,value:14},
          {id:15,value:15}
        ],
        virtualList1:[],
      };
    },
    methods: {
    }
  }
</script>

<style scoped>
  /* .virtualList-item:nth-child(2n){
    background:#eee
  } */
  .virtualList1{
    display:flex;
    flex-wrap:wrap
  }
  .virtualList1-item{
    width:50%
  }
</style>


<!-- 
## 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| amount | 显示的数字（必须） | Number | — |  |
| time | 持续时间 | Number | — | 1000 |
| start | 开始变化 | Boolean | — | true |
| thousand | 千分位 | Boolean | — | false | -->


