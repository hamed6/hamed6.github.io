import React, {useState} from 'react';
import '../index.css';
// import App from '../App'


// import App from './App';

// const Btn=(val,txt)=>{
// return <button onClick={val}>${txt}</button>
// }
// debugger;
    const Feedback=()=>{
    const [good, setStateGood]=useState(0)
    const [bad, setStateBad]=useState(0)
    const [neutral, setStateNeutral]=useState(0)

    return (
    <div>
      <h6> give feedback</h6>
      <button onClick={()=>setStateGood(good+1)}>Good</button>{good}
      <button onClick={()=>setStateBad(bad+1)}>Bad</button>{bad}
      <button onClick={()=>setStateNeutral(neutral+1)}>Neutral</button>{neutral}
    </div>
    )
}


export default Feedback;