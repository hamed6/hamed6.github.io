import React, { useState } from "react";
import "./style.css";


const PhoneBook = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phonenumber: '040-123456' },
    { name: 'Ada Lovelace', phonenumber: '39-44-5323523' },
    { name: 'Dan Abramov', phonenumber: '12-43-234345' },
    { name: 'Mary Poppendieck', phonenumber: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState("");

  const [phonenumber, setPhone] = useState([]);
  const [newPhoneNumber, setNewPhone] = useState("");

  const [searchName, setNewlist]=useState()

  const saveName = (event) => {
    event.preventDefault();
    const nameObj = {
      name: newName,
      phonenumber: newPhoneNumber,
    };
    if (persons.find((person) => person.name === newName)) {
      window.alert(`${newName} is already added!`);
      setNewName("");
      setNewPhone("");
    } else {
      setPersons(persons.concat(nameObj));
      setPhone(phonenumber.concat(newPhoneNumber));
      setNewName("");
      setNewPhone("");
    }
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewPhone(event.target.value);
  };

const findName=(event)=>{
    
    const result=persons.filter((person)=> person.name.includes(event.target.value) )
    console.log(result);
    // setNewlist(event.target.value)
    
}

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      filter names with <input value={searchName} onChange={findName}></input>
      </div>
      <form onSubmit={saveName}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          number:{" "}
          <input value={newPhoneNumber} onChange={handleChangeNumber}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.phonenumber}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneBook;
