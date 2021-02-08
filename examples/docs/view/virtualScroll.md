<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# 虚拟滚动
----
### 基础用法
<su-virtual-scroll id="test" style="height:50vh" :realList="list" :itemSize="itemSize" v-model="virtualList">
  <div 
    v-for="item in virtualList" 
    :key="item.id" 
    :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }">
      <span>{{item.value}}</span>
  </div>
</su-virtual-scroll>

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


<!-- 
## 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| amount | 显示的数字（必须） | Number | — |  |
| time | 持续时间 | Number | — | 1000 |
| start | 开始变化 | Boolean | — | true |
| thousand | 千分位 | Boolean | — | false | -->


