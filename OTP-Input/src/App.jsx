import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
// import {useBackspaceKeyDown} from "./backspace.jsx"
function App() {
  let refs1= useRef(Array(6).fill(""));
  let suc = useRef();
  // const [flag, setFlag] = useState(0);
  const [input1, setInput1] = useState(Array(6).fill(""));
  const flag = useRef(0);
  function showMessage(){
      suc.current.textContent="Only one digit per input box allowed"
      setTimeout(()=>{
        suc.current.textContent=""
      },5000)
  }

  const handleBackspacePress = (index) => {
    console.log('Backspace key pressed globally!');
    // if (flag!==0){
    //   setFlag(flag-1)
    // }
    if (index===0){
        // cur.current=(0)
        // console.log(cur)
        // refs1.current[0].focus()
        // let prev= index
      // console.log(prev)

        const newinput = [...input1]
        newinput[index]=""
        console.log(index)
        setInput1(newinput)
      // flag.current=0
        // refs1.current[prev-1].focus()
    
      }else if (index<6){
      let prev= index-1
      // console.log(prev)

        const newinput = [...input1]
        newinput[index]=""
        console.log(index)
        setInput1(newinput)

        refs1.current[prev].focus()
        // flag.current=prev
      }
        
    
  };
  const handleLeftArrowPress = (index) => {
    // console.log('Left Arrow key pressed globally!');
    console.log("fired hla")
    if (index>0){
      let prev= (index-1)
      // cur.current=(prev)
      // console.log(prev)
      refs1.current[prev].focus()
      // flag.current=prev
    }
  };
  const handleRightArrowPress = (index) => {
    // console.log('Right Arrow key pressed globally!');
    console.log("fired hra")
    if (index<5){
      let prev= (index+1)
      // index=(prev)
      // console.log(prev)
      refs1.current[prev].focus()
      // flag.current=prev
    }
  };

  const handleKeyDown = (event,index) => {
      // const isNumberRegex = /^[0-9]$/.test(event.key);
      // event.preventDefault()
      console.log("fired hkd")
      if (event.keyCode === 46 || event.keyCode === 8) {
        event.preventDefault()
        handleBackspacePress(index);
      }else if (event.keyCode === 37) {
        event.preventDefault()
        handleLeftArrowPress(index);
      }else if (event.keyCode === 39) {
        event.preventDefault()
        handleRightArrowPress(index);
      }
    };
  // useBackspaceKeyDown(, , handleRightArrowPress, InputOne, flag);
  function ifNumber(FirstInput,index){
    // if (index===6){
    //   const newinput = [...input1]
    //     newinput[0]=FirstInput
    //     setInput1(newinput);
    //     // setInputOne();
    //     setFlag(flag+1)
    //     // console.log(refs1.cur.currentrent)
    //     refs1.current[1].focus();
    //     // console.log("0 or 6")
    //     cur.current=(1);
       console.log("fired in") 
    if(index===5){
      const newinput = [...input1]
        newinput[5]=FirstInput
        setInput1(newinput);;
        // setFlag(flag+1)
        // refs[""].current.focus();
        // cur.current=(6);
        // refs1.current[5].blur();
    }else {
        // setFlag(flag+1)
        const newinput = [...input1]
        newinput[index]=FirstInput
        setInput1(newinput);;
        refs1.current[index+1].focus();
        // flag.current=index+1
    }
  }
  function ifNotNumber(index){
        // setInputOne("");

       console.log("fired inn")
        const newinput = [...input1]
        newinput[index]=""
        setInput1(newinput);
  }
  function InputOne(FirstInput,index){

       console.log("fired io")
    if (FirstInput.length>1){
    
    showMessage(FirstInput);
    
    }else if (!isNaN(+FirstInput)) {
      ifNumber(FirstInput,index)
    } else {
      ifNotNumber(index)
    }
  }

  useEffect(() => {
    refs1.current[0]?.focus()
  },[]);
  function handlePaste(e,index){
    e.preventDefault()
    const pastedText = e.clipboardData.getData("text");
    const digits = pastedText.replace(/\D/g, "").slice(0, 6 - index);
    if (digits.length === 0) return;
    const newInput = [...input1];
    for (let i = 0; i < digits.length; i++) {
      newInput[index + i] = digits[i];
    }
    setInput1(newInput);
    const nextFocus = Math.min(index + digits.length, 5);
    refs1.current[nextFocus]?.focus();
  };
  
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
          {input1.map((ini,index)=>{
            return <input type="text" key={index} id={index} onPaste= {(e)=>{handlePaste(e,index)}} onKeyDown={(e)=>handleKeyDown(e,index)} ref={(element)=>{refs1.current[index]=element}} value={ini} onChange={(e) => InputOne(e.target.value,index)} name={index} style={{marginRight: '25px', height: "50px", width: "40px"}}></input>
          })}
          <button style={{margin: 'auto',marginTop:"25px",display: "block"}}>Submit</button>
        </form>
        <p id='successPopup' ref={suc}></p>
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
