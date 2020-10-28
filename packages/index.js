import SuButton from './button/index'
import SuIcon from './icon/index'
import SuCol from './col/index'
import SuRow from './row/index'
 
const components = [
  SuButton,
  SuIcon,
  SuCol,
  SuRow
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
  SuButton,
  SuIcon,
  SuCol,
  SuRow
}