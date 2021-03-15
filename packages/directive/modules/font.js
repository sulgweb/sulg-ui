/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-03-12 14:25:16
 * @LastEditTime: 2021-03-15 13:53:38
 * @Copyright: 1.0.0
 */
export default{
  suFont:{
    inserted(el,building){
      //el.className += " su-font-shadow"
      let data=building.value
      console.log(data.type,data.value)

      let typeObj = {
        // 阴影
        shadow:(data)=>{
          data.value = data.value||5
          data.shadowColor = data.shadowColor||'#a8a8a8'
          let res = ""
          for(let i=1;i<= data.value;i++){
            res += `${i-0.5}px ${i-0.5}px ${data.shadowColor}, ${i}px ${i}px ${data.shadowColor}`
            res+= i==data.value?'':','
          }
          el.style["overflow"]='hidden'
          el.style["textShadow"] = res
        },

        // 氖光
        neon:(data)=>{
          data.shadowColor = data.shadowColor || "#707AE4"
          let res = `
            0 0 3px ${data.shadowColor},
            0 0 5px ${data.shadowColor},
            0 0 10px ${data.shadowColor},
            0 0 20px ${data.shadowColor},
            0 0 50px ${data.shadowColor},
            0 0 100px ${data.shadowColor},
            0 0 200px ${data.shadowColor}
          `
          el.style["textShadow"] = res
        },

        // 镂空
        hollowOut:(data)=>{
          data.color = data.color || "#707AE4"
          data.line = data.line || "1px"
          el.style["color"] = "rgba(0,0,0,0)"
          el.style["-webkit-text-stroke"] = `${data.line} ${data.color}`
        }
      }
      console.log(typeObj[data.type])
      typeObj[data.type] && typeObj[data.type](data)
      //el.style["object-fit"]= "cover"
      //el.className += " su-img-fit"
      //el.style["font-shadow"] = ""
    }
  }
}