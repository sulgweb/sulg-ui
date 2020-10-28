import SuIcon from './src/icon.vue'
 
// 支持按需引用
SuIcon.install = function (Vue) {
  Vue.component(SuIcon.name, SuIcon);
};
 
export default SuIcon;