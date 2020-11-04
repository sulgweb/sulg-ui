## Switch开关

### 基本用法

通过 `v-model` 绑定状态，状态切换时会触发事件。使用 `type` 字段绑定主题。 

<div class="demo-block">
  <div>
    <su-switch v-model="switch1_1"  @on-change="changeSwitch1"></su-switch>
    <su-switch v-model="switch1_2"  type="error"></su-switch>
    <su-switch v-model="switch1_3"  type="warning"></su-switch>
    <su-switch v-model="switch1_4"  type="success"></su-switch>
    <su-switch v-model="switch1_5"  type="default"></su-switch>
    <su-switch v-model="switch1_6"  type="info"></su-switch>
  </div>
  <script>
  export default {
      data() {
        return {
          switch1_1: true,
          switch1_2: true,
          switch1_3: true,
          switch1_4: true,
          switch1_5: true,
          switch1_6: true
        };
      },
      methods: {
        changeSwitch1() {
          this.switch1_1=!this.switch1_1
        },
        changeSwitch2() {
          this.switch2_1=!this.switch2_1
        }
      }
    }
  </script>
</div>


::: demo
```html
<div>
  <div>
    <su-switch v-model="switch1_1"  @on-change="changeSwitch1"></su-switch>
  </div>
  <script>
  export default {
      data() {
        return {
          switch1_1: false,
        };
      },
      methods: {
        changeSwitch1() {
          this.switch1_1=!this.switch1_1
        },
      }
    }
  </script>
</div>
```
:::


### 使用插槽

<div class="demo-block">
  <div>
    <su-switch>
      <span slot="open">ON</span>
      <span slot="close">OFF</span>
    </su-switch>
    <su-switch>
      <span slot="open">开启</span>
      <span slot="close">关闭</span>
    </su-switch>
  </div>
</div>


::: demo
```html
<div>
  <div>
    <su-switch>
      <span slot="open">ON</span>
      <span slot="close">OFF</span>
    </su-switch>
    <su-switch>
      <span slot="open">开启</span>
      <span slot="close">关闭</span>
    </su-switch>
  </div>
</div>
```
:::