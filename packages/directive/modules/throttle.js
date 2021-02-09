//import Vue from 'vue'
/***
 *  节流 每单位时间可触发一次
 *  第一次瞬间触发，最后一次不管是否达到间隔时间依然触发
 * 【考虑到input的change事件】
 *  @param {?Number|300} time - 间隔时间
 *  @param {Function} fn - 执行事件
 *  @param {?String|"click"} event - 事件类型 例："click"
 *  @param {Array} binding.value - [fn,event,time]
 *  例：<button v-throttle="[reset,`click`,300]">刷新</button>
 *  传递参数则：<button v-throttle="[()=>reset(param),`click`,300]">刷新</button>
 */

export default {
    suThrottle:{
        inserted(el,binding){
            let [fn, event = "click", time = 300] = binding.value
            let timer, timer_end;
            el.addEventListener(event, () => {
                if (timer) {
                    clearTimeout(timer_end);
                    return timer_end = setTimeout(() => fn(), time);
                }
                fn();
                timer = setTimeout(() => timer = null, time)
            })
        }
    }
}