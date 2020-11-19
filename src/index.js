import React from 'react';
import ReactDOM from 'react-dom';
import Feedback from './solution/feedback'
import * as serviceWorker from './serviceWorker';
import App from './App'



ReactDOM.render(
    <React.StrictMode>
        <Feedback/>
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister();