import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//**************************************************************************************************************
// 2 ways to define function
// 1st fucntion declaration
function dec(){
  return null
}
// 2nd function expression
const exp=function(){
  return null
}
// storing a method reference in a variable 
// ** calling the method through a reference, the method loses knowledge of what was the original this
// ** When calling the method through a reference the value of this becomes the so-called global object
// https://fullstackopen.com/en/part1/java_script#functions
const referenceToFun=exp

// object -- Object literals
const firstObj={
  code:'js',
  version:10,
  otherCode:{
    backend:'nodejs',
    framework:'react'
  }
}
// add properties to the object
// firstObj.otherCode.framework['angular']


const FindName=(pp)=>{
  return(
  <p>My name is {pp.name} and I'm {pp.age} years old!</p>
  )
}

//**************************************************************************************************************

const Myapp=()=>{
  // console.log("something")
  // const now=new Date();
  
  return(
    // <div>
    <>
    <p>
    <Hello/>  
      customer name.
    </p>
    <FindName name='HGH' age='34'/>
    <MapList/>
    </>
  // </div>
  )
}
//**************************************************************************************************************
// map 
const marr=[1,2,3]
const nmarr=marr.map(val=>val*2)
// console.log(nmarr)
const MapList=()=>{
  return (marr.map(value => <li>  {value}  </li>)
  )
}
//**************************************************************************************************************
//concat array
const farr=[1,2]
const sarr=[3,4]
const tarr=farr.concat(sarr)
// console.log('concat is '+tarr)
//**************************************************************************************************************
// destructuring assignment 
const destruct=[1,2,3,40,50]
const [f,s, ...restof]=destruct
// console.log(f,s)
// console.log(restof)


//**************************************************************************************************************
const Hello=(prop)=>{
  const {name , age}=prop
  return(
    <div>
    <p>
      Hello {name} you are {age}
    </p>
  </div>
  )
}



const R=(p)=>{
  const {r}=p
  return(
    <div> {r} </div>
  )
}

let rr = 123

const Application=()=>{
  const name='hgh'
  const age=34
  return(
    <div>
      <Hello name='hgh2' age={35} />
      <Hello name={name} age={age}/>
    </div>
  )
}

// const refresh=()=>ReactDOM.render(
//   <React.StrictMode>
//     <R r={rr} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// setInterval((callback)=>{
//   refresh()
//   rr+=10
// },1000)

//**************************************************************************************************************
const TestState=()=>{
  const [count, setCount]=useState(0);
  return(
   <div>
     <p>
     you click {count} times 
      </p>
      <button onClick={()=>setCount(count+1)} >
        click me
      </button>
      <button onClick={()=>console.log('clicked')}>C</button>
   </div> 
  )
}

//**************************************************************************************************************
const App1=()=>{
  const [c, s]=useState(1000)
  setTimeout(()=>s(c+1),1000)
  console.log(c);
return <div>{c}</div>
}
//**************************************************************************************************************
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App2 = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}

//**************************************************************************************************************

const Disp=({val})=>{
  return <div>{val}</div>
}

const Btn=({clk, txt})=>{
  return <button onClick={clk}>{txt}</button>
}

const App3=()=>{
  const [a,setC]=useState(0)

  const add=()=> setC( a+1)
  const min=()=>  setC( a-1)
  const res=()=> setC( 0)
  return(
    <div>

      <Disp val={a}/>
      <Btn clk={add} txt='+' />
      <Btn clk={min} txt='-'/>
      <Btn clk={res} txt='reset'/>
    </div>

  )
}
//**************************************************************************************************************
// Complex state: Object spread example 

const App4=()=>{
  const [click, setState]=useState({left:0, right:0, all:0});


  const clickLeft=()=>{
    const newVal={
      ...click,
      left:click.left+1
    }
    setState(newVal)
  }

  const clickRight=()=>{
    const newVal={
      ...click,
      right:click.right+1
    }
    setState(newVal)
  }
  // One way of saving all clicks Left&Right
  const clickAll=()=>{
    const newVal={
      ...click,
      all:click.left+ click.right
    }
    setState(newVal)
  }
  
  return(
    <div>
      {click.left}
      <button onClick={clickLeft}>left</button>
      <button onClick={clickRight}>right</button>
      {click.right}
      <button onClick={clickAll}>ALL</button>
      {click.all}
    </div>
  )
}
//**************************************************************************************************************
// debugging by cmd OR source tab in dev tool chrome 
// * pause the execution 
debugger;

//**************************************************************************************************************
// rules of hooks. To ensure that our application uses hooks-based state functions correctly:
// useState useEffect must not be called from inside of a loop, a conditional expression, or any place that is not a function defining a component.

//**************************************************************************************************************
ReactDOM.render(
<React.StrictMode>
    <App4/>
  </React.StrictMode>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();