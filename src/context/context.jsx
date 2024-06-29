import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) =>{
    
    const [input,setinput] = useState("")
    const [recentprompt,setrecentprompt]= useState("")
    const [prevprompt,setprevprompt] = useState([])
    const [showResult,setshowResult] = useState(false)
    const [loading,setloading] =useState(false)
    const [result,setresult] = useState("")


       const delaypara = (index,nextword)=>{
             setTimeout(function (){
                 setresult(prev=> prev+nextword)
             }, 75*index)
       }
const newchat = ()=>{
    setloading(false)
    setshowResult(false)
}
    const onSent = async (prompt)=>{
        setresult("")
        setloading(true)
        setshowResult(true)
        let response ;
        if (prompt !== undefined) {
            response =  await  run(input)
            setrecentprompt(prompt)
        }else{
            setprevprompt(prev=>[...prev,input])
            setrecentprompt(input)
            response = await run(input)
        }
      
      
   
   let responsearray = response.split("**")
   let newresponse="";
   for(let i=0;i<responsearray.length;i++){
    if(i == 0 || i%2 !== 1){
        newresponse += responsearray[i];
    }else{
        newresponse += "<b>"+responsearray[i]+"</b>"
    }
   }
   let newresponse2 = newresponse.split("*").join("</br>")
   let newresponsearray = newresponse2.split(" ");
   for(let i=0; i<newresponsearray.length;i++){
    const nextword =newresponsearray[i]
    delaypara(i,nextword+" ")
   }
   setloading(false)
   setinput("")
    }
   
    const contextvalue ={
        onSent,
     prevprompt,
     setprevprompt,
     recentprompt,
     setrecentprompt,result,setresult,
     loading,setloading,
     input,setinput,
     showResult,setshowResult
     ,newchat
    }
    return(
        <Context.Provider value={contextvalue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider