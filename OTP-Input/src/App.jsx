import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useBackspaceKeyDown} from "./backspace.jsx"
function App() {
  let refs = {
    "1": useRef(),
    "2": useRef(),
    "3": useRef(),
    "4": useRef(),
    "5": useRef(),
    "6": useRef()
  }
  
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");
  const [inputFour, setInputFour] = useState("");
  const [inputFive, setInputFive] = useState("");
  const [inputSix, setInputSix] = useState("");
  const [cur, setCur] = useState("1");
  const handleBackspacePress = () => {
    console.log('Backspace key pressed globally!');
    if (cur==="1") {
      setCur("6")
      console.log("6")
      refs["6"].current.focus()
      setInputSix("");
    } else if (cur!=="1"){
      let prev= (Number(cur)-1).toString()
      setCur(prev)
      console.log(prev)
      refs[prev].current.focus()
      if (prev==="1"){
        setInputOne("");
        // refs["2"].current.focus();
        // setCur("2");
      }else if (prev==="2"){
        setInputTwo("");
        // refs["3"].current.focus();
        // setCur("3");
      }else if (prev==="3"){
        setInputThree("");
        // refs["4"].current.focus();
        // setCur("4");
      }else if (prev==="4"){
        setInputFour("");
        // refs["5"].current.focus();
        // setCur("5");
      }else if (prev==="5"){
        setInputFive("");
        // refs["6"].current.focus();
        // setCur("6");
      }else if (prev==="6"){
        setInputSix("");
        // refs[""].current.focus();
        // setCur("2");
        // enter logic.
      }
    }
  };
  const handleLeftArrowPress = () => {
    console.log('Left Arrow key pressed globally!');
    if (cur!=="1"){
      let prev= (Number(cur)-1).toString()
      setCur(prev)
      console.log(prev)
      refs[prev].current.focus()
    } else if (cur === "1"){
      setCur("6")
      console.log("6")
      refs["6"].current.focus()
    }
  };
  const handleRightArrowPress = () => {
    console.log('Right Arrow key pressed globally!');
    if (cur==="6"){
      setCur("1")
      console.log("1")
      refs["1"].current.focus()
    } else {
      let prev= (Number(cur)+1).toString()
      setCur(prev)
      console.log(prev)
      refs[prev].current.focus()
    }
  };
  useBackspaceKeyDown(handleBackspacePress, handleLeftArrowPress, handleRightArrowPress);

  function InputOne(FirstInput){
    if (FirstInput.length>1){
      document.getElementById("successPopup").textContent="Only one digit per input box allowed"
      setTimeout(()=>{
        document.getElementById("successPopup").textContent=""
      },5000)
    }
    if (!isNaN(+FirstInput)) {
      if (FirstInput.length===1 && cur==="1"){
        setInputOne(FirstInput);
        refs["2"].current.focus();
        setCur("2");
      }else if (FirstInput.length===1 && cur==="2"){
        setInputTwo(FirstInput);
        refs["3"].current.focus();
        setCur("3");
      }else if (FirstInput.length===1 && cur==="3"){
        setInputThree(FirstInput);
        refs["4"].current.focus();
        setCur("4");
      }else if (FirstInput.length===1 && cur==="4"){
        setInputFour(FirstInput);
        refs["5"].current.focus();
        setCur("5");
      }else if (FirstInput.length===1 && cur==="5"){
        setInputFive(FirstInput);
        refs["6"].current.focus();
        setCur("6");
      }else if (FirstInput.length===1 && cur==="6"){
        setInputSix(FirstInput);
        // refs[""].current.focus();
        setCur("1");
        refs["1"].current.focus();
        // enter logic.
      }
    } else {
      if (FirstInput.length===1 && cur==="1"){
        setInputOne("");
        // refs["2"].current.focus();
        // setCur("2");
      }else if (FirstInput.length===1 && cur==="2"){
        setInputTwo("");
        // refs["3"].current.focus();
        // setCur("3");
      }else if (FirstInput.length===1 && cur==="3"){
        setInputThree("");
        // refs["4"].current.focus();
        // setCur("4");
      }else if (FirstInput.length===1 && cur==="4"){
        setInputFour("");
        // refs["5"].current.focus();
        // setCur("5");
      }else if (FirstInput.length===1 && cur==="5"){
        setInputFive("");
        // refs["6"].current.focus();
        // setCur("6");
      }else if (FirstInput.length===1 && cur==="6"){
        setInputSix("");
        // refs[""].current.focus();
        // setCur("2");
        // enter logic.
      }
    }
  }
  function OTPSubmitHandler(){}
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <form action="" method="post">
          <input type="text" id="one" ref={refs["1"]} value={inputOne} onChange={(e) => InputOne(e.target.value)} name='one' style={{marginRight: '25px', height: "50px", width: "40px"}}></input>
          <input type="text" id='two' ref={refs["2"]} value={inputTwo} onChange={(e) => InputOne(e.target.value)} name='two' style={{marginRight: '25px', height: "50px", width: "40px"}}></input>
          <input type="text" id='three' ref={refs["3"]} value={inputThree} onChange={(e) => InputOne(e.target.value)} name='three' style={{marginRight: '25px', height: "50px", width: "40px"}}></input>
          <input type="text" id='four' ref={refs["4"]} value={inputFour} onChange={(e) => InputOne(e.target.value)} name='four' style={{marginRight: '25px', height: "50px", width: "40px"}}></input>
          <input type="text" id='five' ref={refs["5"]} value={inputFive} onChange={(e) => InputOne(e.target.value)} name='five' style={{marginRight: '25px', height: "50px", width: "40px"}}></input>
          <input type="text" id='six' ref={refs["6"]} value={inputSix} onChange={(e) => InputOne(e.target.value)} name='six' style={{marginRight: '25px', height: "50px", width: "40px"}}></input>
          <button style={{margin: 'auto',marginTop:"25px",display: "block"}} onSubmit={OTPSubmitHandler}>Submit</button>
        </form>
        <p id='successPopup'></p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
