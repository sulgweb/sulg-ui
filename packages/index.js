import SuButton from './button/index'
import SuIcon from './icon/index'
import SuCol from './col/index'
import SuRow from './row/index'
import SuTag from "./tag/index"
import SuSwitch from './switch/index'
import SuNumAnimate from './numAnimate/index'
import {SuModal,jsSuModall} from './modal/index'
import {SuVirtualScroll} from "./virtual/index"
import SuInput from "./input/index"


// 引入自定义指令
import "./directive/index"
 
const components = [
  SuButton,
  SuIcon,
  SuCol,
  SuRow,
  SuTag,
  SuSwitch,
  SuNumAnimate,
  SuModal,
  SuVirtualScroll,
  SuInput,
];
 
const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
  Vue.prototype.$SuModal = jsSuModall
};
 
if (typeof window.Vue !== "undefined" && window.Vue) {
  install(window.Vue);
}
 
export default {
  install,
  ...components
}