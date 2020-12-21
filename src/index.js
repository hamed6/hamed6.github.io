// "start": "react-scripts start",


import React from 'react';
import ReactDOM from 'react-dom';
// import Feedback from './solution/feedback'
import * as serviceWorker from './serviceWorker';
import App from './App'
import axios from 'axios'




// const promise = axios.get('http://localhost:3001/notes')
// promise.then(res=>
//     console.log(res)
// )


// axios
//     .get('http://localhost:3001/notes')
//     .then(res=>{
//     const notes=res.data
//     console.log(notes)
// })

// const promise2= axios.get('http://localhost:3001/foobar')
// console.log(promise2);


const notes=[{
    id:1,
    title:'Person 1 feedback',
    content:'This feedback system must be improved!'
},
{
    id:2,
    title:'Person 2 feedback',
    content:'This feedback system must be better!'
},
{
    id:3,
    title:'Person 3 feedback',
    content:'This feedback system must be modified!'
}
]

ReactDOM.render(
    <React.StrictMode>
        <App notes={notes}/>
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister();