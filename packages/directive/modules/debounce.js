/***
 * 防抖 单位时间只触发最后一次
 *  @param {?Number|300} time - 间隔时间
 *  @param {Function} fn - 执行事件
 *  @param {?String|"click"} event - 事件类型 例："click"
 *  @param {Array} binding.value - [fn,event,time]
 *  例：<button v-debounce="[reset,`click`,300]">刷新</button>
 *  也可简写成：<button v-debounce="[reset]">刷新</button>
 */
export default{
    suDebounce:{
        inserted(el, binding){
            let [fn, event = "click", time = 300] = binding.value
            let timer
            el.addEventListener(event, () => {
                timer && clearTimeout(timer)
                timer = setTimeout(() => fn(), time)
            })
        }
    }
}