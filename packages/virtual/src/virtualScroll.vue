<template>
  <div :id="id" @scroll="scrollEvent($event)" class="su__virtualScroll">
    <div
      class="su__virtualScroll-phantom"
      :style="{ height: listHeight + 'px' }"
    ></div>
    <div class="su__virtualScroll-list" :style="{ transform: getTransform }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuVirtualScroll",
  props: {
    // 所有列表
    realList: {
      type: Array,
      default: () => [],
    },

    // 每行高度
    lineHeight: {
      type: Number,
      default: 200,
    },

    // 每行数量
    lineNum: {
      type: Number,
      default: 1,
    },

    // id
    id: {
      type: String,
      default: "virtualScroll",
    },
  },
  computed: {
    // 列表总高度
    listHeight() {
      return Math.ceil(this.realList.length / this.lineNum) * this.lineHeight;
    },

    // 可视区域的数量
    visibleCount() {
      return (
        Math.ceil(this.screenHeight / this.lineHeight) * (this.lineNum + 1)
      );
    },

    // 偏移量对应的style
    getTransform() {
      return `translate3d(0, ${this.startOffset}px, 0)`;
    },

    // 获取虚拟列表中显示的数据
    virtualList() {
      return this.realList.slice(
        this.start,
        Math.min(this.end, this.realList.length)
      );
    },
  },
  data() {
    return {
      // 可视区域高度
      screenHeight: 0,
      // 偏移量
      startOffset: 0,
      // 起始索引
      start: 0,
      // 结束索引
      end: null,
    };
  },
  mounted() {
    // 页面数据初始化
    this.$nextTick(() => {
      this.screenHeight = this.$el.clientHeight;
      this.start = 0;
      this.end = this.start + this.visibleCount;
    });
  },
  methods: {
    scrollEvent() {
      this.$nextTick(() => {
        // 当前滚动位置
        let scrollTop = document.getElementById(this.id).scrollTop;

        // 更新开始索引
        this.start = Math.floor(scrollTop / this.lineHeight) * this.lineNum;

        // 更新结束索引
        this.end = this.start + this.visibleCount;

        // 滚动时列表盒子的偏移量
        this.startOffset = scrollTop - (scrollTop % this.lineHeight);
      });
    },
  },
  watch: {
    virtualList: {
      handler(newval, oldval) {
        this.$nextTick(() => {
          this.$emit("input", newval);
        });
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
.su__virtualScroll {
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
  &-phantom {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
  }
  &-list {
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
    text-align: center;
  }
}
</style>