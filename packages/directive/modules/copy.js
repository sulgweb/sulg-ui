/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-02-09 14:10:43
 * @LastEditTime: 2021-02-09 17:58:07
 * @Copyright: 1.0.0
 */
export default{
  suCopy:{
    inserted(el,building){
      let {func=()=>{alert("copy succeed")},id,event="click",type="input"} = building.value
      el.addEventListener(event,()=>{
        document.getElementById(id).select()
        document.execCommand("Copy");
        func()
        /* var clearSlct= "getSelection" in window ? function(){
          window.getSelection().removeAllRanges();
         } : function(){
          document.selection.empty();
         };
         clearSlct() */  
      })
    }
  }
}