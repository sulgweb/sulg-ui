/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-02-10 14:10:43
 * @LastEditTime: 2021-04-11 11:15:18
 * @Copyright: 1.0.0
 */
export default{
  suCopy:{
    inserted(el,building){
      let {func=()=>{/* alert("copy succeed") */},id,event="click",type="input",value=""} = building.value
      el.addEventListener(event,()=>{
        let copyInput = document.createElement("input")
        let inputId = id+"_copyInput"
        if(value){
          copyInput.value = value
        }else{
          copyInput.value = document.getElementById(id).value||document.getElementById(id).innerHTML
        }
        copyInput.setAttribute("id",inputId)
        copyInput.setAttribute("style","position:absolute;width:100px;height:100px;top:-100px;left:-100px;z-index:-999")
        document.body.append(copyInput)
        document.getElementById(inputId).select()
        document.execCommand("Copy");
        document.body.removeChild(copyInput)
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