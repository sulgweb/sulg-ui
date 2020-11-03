import SuTag from "./src/tag"

SuTag.install = function(Vue){
  Vue.component(SuTag.name,SuTag)
}

export default SuTag