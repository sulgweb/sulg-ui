/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-03-12 14:25:16
 * @LastEditTime: 2021-03-12 15:27:12
 * @Copyright: 1.0.0
 */
export default{
  suFont:{
    inserted(el,building){
      //el.className += " su-font-shadow"
      let {type="shadow",value=5,shadowColor="#a8a8a8"}=building.value
      console.log(type,value)

      let typeObj = {
        shadow:(num,color)=>{
          let data = ""
          for(let i=1;i<= num;i++){
            data += `${i-0.5}px ${i-0.5}px ${color}, ${i}px ${i}px ${color}`
            data+= i==num?'':','
          }
          el.style["overflow"]='hidden'
          el.style["textShadow"] = data
        }
      }
      typeObj[type] && typeObj[type](value,shadowColor)
      //el.style["object-fit"]= "cover"
      //el.className += " su-img-fit"
      //el.style["font-shadow"] = ""
    }
  }
}