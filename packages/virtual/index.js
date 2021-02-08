/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-02-06 17:45:12
 * @LastEditTime: 2021-02-08 10:16:57
 * @Copyright: 1.0.0
 */
import SuVirtualScroll from "./src/virtualScroll"

SuVirtualScroll.install = function(Vue){
  Vue.component(SuVirtualScroll.name,SuVirtualScroll)
}

export {SuVirtualScroll}