import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Feedback from "./solution/feedback";
import Note from "./solution/note";
import PhoneBook from "./solution/phonebook";
import axios from "axios";
// import { Route, BrowserRouter as Router, Switch,Link } from 'react-router-dom';

const App = (props) => {
  const [serverNote, setServerNotes]=useState([])

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNotes] = useState("To do list...");
  const [showAll, setShow] = useState(true);

  const noteToshow = showAll ? notes : notes.filter((note) => note.important);

  const handleNewNote = (event) => {
    setNewNotes(event.target.value);
  };

  //controlled components
  const addNote = (event) => {
    event.preventDefault();
    const noteObj = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObj));
    setNewNotes("");
  };


  useEffect(()=>{
    console.log('effect started....');
    axios.get('http://localhost:3001/notes').then(res=>{
      console.log('got result');
      setServerNotes(res.data)
    })
  }, [])
  console.log(`servernotes============== ${serverNote.length } `);
  return (
    <div>
      {/* ========Feeback======= */}
      <div>
        <Feedback />
      </div>
      {/* ========To do======= */}
      <div>
        <ul>
          {noteToshow.map((note) => (
            <Note key={note.id} props={note} />
          ))}
        </ul>
        {/* <Note props={notes} /> */}
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNewNote} />
          <button type="submit">Save</button>
        </form>
        <div>
          <button onClick={() => setShow(!showAll)}>
            Show {showAll ? "important" : "all"}
          </button>
        </div>
      </div>
      {/* ========Phonebook======= */}
      <div>
        <PhoneBook />
      </div>
    </div>
  );
};

export default App;



// =======================================================================
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
