import Axios from 'axios'
import React,{useState, useEffect} from 'react'
import axios from 'axios'




const PhoneDB=()=>{
    const [persons, setPersons]=useState([])


    useEffect(()=>{
        axios.get('http://localhost:3001/persons').then(res=>{
            // console.log('==================',res.data);
            setPersons(res.data)
        }).catch((e)=>{console.log('--------------------------->',e) })
    },[])


    return(<div> 
        <h1>Phonebook from JSON DB</h1>
    {persons.map(p=> <div key={p.name}> {p.name} {p.phonenumber}</div>)}
    </div>)

}


export default PhoneDB


