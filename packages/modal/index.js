/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-20 16:43:38
 * @LastEditTime: 2021-01-21 15:03:42
 * @Copyright: 1.0.0
 */
import Vue from "vue"
import SuModal from './src/modal.vue'

let SuModalContuctor = Vue.extend(SuModal);
let instance;

let jsSuModall = (options = {}) =>{
  
  options.onClose = function (){
    SuModal.closeFunc()
  }
  console.log(options)
  instance = new SuModalContuctor({
    propsData:options
  })
  document.body.appendChild(instance.$mount().$el)
}
 
// 支持按需引用
SuModal.install = function (Vue) {
  Vue.component(SuModal.name, SuModal);
};
 
export {SuModal,jsSuModall};