import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Feedback from './solution/feedback';
import Note from './solution/note'
// import { Route, BrowserRouter as Router, Switch,Link } from 'react-router-dom';




const  App=(props)=>{
  
  const [notes, setNotes]=useState(props.notes)
  
  const [newNote, setNewNotes]=useState('A new note...')
  const handleNewNote=(event)=>{
  
    setNewNotes(event.target.value)
  }

  const addNote=(event)=>{
    event.preventDefault() 
    console.log('button clicked', event.target)
    const noteObj={
      content: newNote,
      id:newNote.length+1,
    }
    setNewNotes()
  }

  return (
    <div>
      <Feedback/>
      <ul>
        {
          notes.map((note)=><Note key={note.id}  props={note} />)
        }
      </ul>
      {/* <Note props={notes} /> */}
      <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNewNote}/>
      <button type="submit">Save</button>
      </form>
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


