//import Vue from 'vue'
/***
 *  节流 每单位时间可触发一次
 *  第一次瞬间触发，最后一次不管是否达到间隔时间依然触发
 * 【考虑到input的change事件】
 *  @param {?Number|300} delay - 间隔时间
 *  @param {Function} fn - 执行事件
 *  @param {?String|"click"} event - 事件类型 例："click"
 *  @param {Array} binding.value - [fn,event,delay,immediate]
 *  例：<button v-throttle="[reset,`click`,300]">刷新</button>
 *  传递参数则：<button v-throttle="[()=>reset(param),`click`,300]">刷新</button>
 */

export default {
    suThrottle:{
        inserted(el,binding){
            let [fn, event = "click", delay = 300, immediate=false] = binding.value
            let timer;
            let tag = true
            if(immediate){
                el.addEventListener(event, () => {
                    if (tag) {
                        fn()
                        tag = false
                        timer = setTimeout(()=>tag=true,delay)
                    }
                })
            }else{
                el.addEventListener(event,()=>{
                    if(tag){
                        tag = false
                        timer = setTimeout(()=>{
                            fn();
                            tag = true
                        },delay)
                    }
                })
            }
            
        }
    }
}