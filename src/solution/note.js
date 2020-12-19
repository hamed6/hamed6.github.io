import React, { useState } from "react";
// import ReactDom from 'react-dom';

const Note = ({ note, toggleImportance  }) => {

  const lable=note.important? 'make not important': 'make it important'


  return (
    <div>
      <li className="note"> {note.content} </li>
      <button onClick={toggleImportance}> {lable}  </button>
    </div>
  );
};

export default Note;
