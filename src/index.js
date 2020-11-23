import React from 'react';
import ReactDOM from 'react-dom';
// import Feedback from './solution/feedback'
import * as serviceWorker from './serviceWorker';
import App from './App'

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