import SuButton from './src/button.vue'
 
// 支持按需引用
SuButton.install = function (Vue) {
  Vue.component(SuButton.name, SuButton);
};
 
export default SuButton;