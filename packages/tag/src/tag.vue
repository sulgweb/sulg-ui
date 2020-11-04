<template>
  <div class="su-tag" >
    <div :class="[
        'su-tag__'+type,
        bgColor&&type?'su-tag__'+type+'-bg':'',
        round?'su-tag__round':''
      ]" >
      <span :style="closable?'margin-right: 24px;':''"><slot></slot></span>
      <i class="sulg-icon-close su-tag__icon" v-if="closable" @click="hiddenTag"></i>
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
    },
    round:{
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