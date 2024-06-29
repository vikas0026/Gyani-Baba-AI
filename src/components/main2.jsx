import React, { useContext } from 'react'
import ExploreIcon from '@mui/icons-material/Explore';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MessageIcon from '@mui/icons-material/Message';
import CodeIcon from '@mui/icons-material/Code';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import './main2.css'
import { Context } from '../context/context';
const main = () => {
const {onSent, prevprompt,
  setprevprompt,
  recentprompt,
  setrecentprompt,result,setresult,
  loading,setloading,
input,setinput,showResult,setshowResult} = useContext(Context)

  return (
    <>
   <div className="main">
    <div className="nav">
       
       <img src="/src/components/sadhu-sitting-and-meditating-isolated-vector.jpg" alt="logo" srcset="" id='logo'/>
       <h1 className="heading">GYANI BABA  </h1>
    </div>
    <div className="main-container">
      {!showResult?<>
        <div className="greet">
        <p><span>राम राम !, 
        महोदय </span>
        <br />
        </p>
        <p>मैं आपकी क्या मदद कर सकता हूँ ?</p>
      </div>
      <div className="cards">
        <div className="card">
          <p>Suggest beautiful places to see on an upcoming road trip</p>
            <ExploreIcon id="icon"></ExploreIcon>
        </div>
        <div className="card">
          <p>Briefly Summerize this concept: urban planning</p>
            <LightbulbIcon id="icon"></LightbulbIcon>
        </div>
        <div className="card">
          <p>Brainstrom team bonding activities for our work treat</p>
            <MessageIcon id="icon"></MessageIcon>
        </div>
        <div className="card">
          <p>Improve the readility of the following code </p>
           <CodeIcon id="icon"></CodeIcon>
        </div>
      </div>
      </> :
      <div className="result">
        <div className="result-title">
          <p> &nbsp; &nbsp; प्रशन: &nbsp; {recentprompt}</p>
        </div>
        <div className="result-data">
           {loading?<>
           <div className="loader">
            <hr />
            <hr />
            <hr />
           </div>
           </>: <> &nbsp; <span>उत्तर:</span> <p dangerouslySetInnerHTML={{__html:result}}></p>
           </>
           }
         
        </div>
      </div>
      }
      <br />
      <div className="main-bottom">
        <div className="search-box">
          <input type="text" onChange={(e)=>setinput(e.target.value) } placeholder='Enter a prompt here' />
          <div>
           <InsertPhotoIcon id="mainicon"></InsertPhotoIcon>
           <MicIcon id="mainicon"></MicIcon>
           <SendIcon id="mainicon" onClick={()=>onSent()}></SendIcon>
          </div>
        </div>
        <p className='bottom-info'>
          Gyani Baba may display inaccurate info, including about people, so double check its .  <br />
          <span id='link' >Gyani Baba  is designed and developed by <a href="">VIKAS</a></span>
        </p>
      </div>
    </div>
   </div>
    </>
  )
}

export default main