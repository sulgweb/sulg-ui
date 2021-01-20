import SuButton from './button/index'
import SuIcon from './icon/index'
import SuCol from './col/index'
import SuRow from './row/index'
import SuTag from "./tag/index"
import SuSwitch from './switch/index'
import SuNumAnimate from './numAnimate/index'
 
const components = [
  SuButton,
  SuIcon,
  SuCol,
  SuRow,
  SuTag,
  SuSwitch,
  SuNumAnimate
];
 
const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};
 
if (typeof window.Vue !== "undefined" && window.Vue) {
  install(window.Vue);
}
 
export default {
  install,
  ...components
}