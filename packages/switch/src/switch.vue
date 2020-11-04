<template>
  <div class="su-switch">
    <div :class="['su-switch__core',checked?'su-switch__'+type:'', checked?'su-switch__core-checked':'']" @click="onChange">
      <span v-if="!checked" style="margin-left:20px">
        <slot name="open"></slot>
      </span>
      <span v-else style="margin-left:5px">
        <slot name="close"></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:"SuSwitch",
  props:{
    value:{
      type:Boolean,
      default:false
    },
    type:{
      type:String,
      default:"primary"
    }
  },
  data(){
    return {
      checked:false
    }
  },
  methods:{
    onChange(){
      this.checked=!this.checked
      this.$emit("on-change")
    }
  },
  watch:{
    value:{
      handler(newval,oldval){
        this.checked = newval
      },
      immediate:true
    }
  }
}
</script>

<style lang="less" scoped>

</style>