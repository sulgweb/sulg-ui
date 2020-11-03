<template>
  <div class="su-tag" >
    <div :class="['su-tag-'+type,bgColor&&type?'su-button-'+type+'-bg':'']" >
      <span :style="closable?'margin-right: 24px;':''"><slot></slot></span>
      <i class="sulg-icon-close su-tag-icon" v-if="closable" @click="hiddenTag"></i>
    </div>
  </div>
</template>

<script>
export default {
  name:"SuTag",
  props:{
    closable:{
      type:Boolean,
      default:false
    },
    type:{
      type:String,
      default:"primary"
    },
    bgColor:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    hiddenTag () {
      this.isclosed = true
      this.$emit('close')
    }
  }
}
</script>

<style lang="less" scoped>

</style>