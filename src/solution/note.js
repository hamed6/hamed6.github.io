import React, { useState } from 'react';
// import ReactDom from 'react-dom';

const Note=(props)=>{
    const [note, setNotes ]=useState(props.notes)
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
    return  (
        <div>
            <ul>
                {
                    notes.map(note=> <li key={note.id} >{note.content}</li> )
                    // notes.map(note=><Note  key={note.id} note={note}/>)
                }
            </ul>
        </div>
    )
}

export default Note;