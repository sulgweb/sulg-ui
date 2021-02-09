/***
 * 防抖 单位时间只触发最后一次
 *  @param {?Number|300} delay - 间隔时间
 *  @param {Function} fn - 执行事件
 *  @param {?String|"click"} event - 事件类型 例："click"
 *  @param {Array} binding.value - [fn,event,delay,immediate]
 *  例：<button v-debounce="[reset,`click`,300]">刷新</button>
 *  也可简写成：<button v-debounce="[reset]">刷新</button>
 */
export default{
    suDebounce:{
        inserted(el, binding){
            let [fn, event = "click", delay = 300, immediate = false] = binding.value
            let timer
            let flag = true
            if(immediate){
                el.addEventListener(event, () => function(){
                    timer && clearTimeout(timer)
                    if(flag){
                        fn.apply(this,arguments)
                        flag = false
                    }else{
                        timer = setTimeout(() => {flag = true,fn()}, delay)
                    }
                }())
            }else{
                el.addEventListener(event, () => {
                    timer && clearTimeout(timer)
                    timer = setTimeout(() => fn(), delay)
                })
            }
        }
    }
}