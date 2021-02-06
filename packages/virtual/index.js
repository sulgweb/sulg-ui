/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-02-06 17:45:12
 * @LastEditTime: 2021-02-06 18:58:42
 * @Copyright: 1.0.0
 */
import SuVirtualScroll from "./src/virtualScroll"

SuVirtualScroll.install = function(Vue){
  Vue.component(SuTag.name,SuVirtualScroll)
}

export {SuVirtualScroll}