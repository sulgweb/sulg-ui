/*
 * @description: 封装自定义指令
 * @author: 小羽
 * @Date: 2021-02-10 10:10:22
 * @LastEditTime: 2021-02-10 10:12:43
 * @Copyright: 1.0.0
 */
import Vue from "vue"
Vue.use((Vue) => {
  ((requireContext) => {
    const arr = requireContext.keys().map(requireContext);
    (arr || []).forEach((directive) => {
      directive = directive.__esModule && directive.default ? directive.default : directive;
      Object.keys(directive).forEach((key) => {
        console.log(key)
        Vue.directive(key, directive[key]);
      });
    });
  })(require.context('./modules', false, /^\.\/.*\.js$/));
});
