import React from 'react';
import logo from './logo.svg';
import './App.css';
import Feedback from './solution/feedback';
import Note from './solution/note'
// import { Route, BrowserRouter as Router, Switch,Link } from 'react-router-dom';




const  App=()=>{
  return (
    <div>
      <Feedback/>
      <Note />
    </div>
  )
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



/*
function App() {
  return (
    <Router>
      <div>
      <nav>
      <ul>

      <li>
        <Link to="/feedback">Feedback</Link>
      </li>
    </ul>
      </nav>
    <Switch>
        <Route path='/feedback.js'>
        <Feedback/>
      </Route>
    </Switch>
      </div>
  </Router>
)
}

function Feedback(){
return <h2>feedback</h2>
}

*/


