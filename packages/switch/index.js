import SuSwitch from './src/switch.vue'
 
// 支持按需引用
SuSwitch.install = function (Vue) {
  Vue.component(SuSwitch.name, SuSwitch);
};
 
export default SuSwitch;