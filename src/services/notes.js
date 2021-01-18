import axios from 'axios'
// const cors = require('cors')

const baseURL= 'http://localhost:3001/notes'


const getAll =()=>{
    const request= axios.get(baseURL)
    return request.then(res=> res.data)

}

const create = newObj =>{
    const request=axios.post(baseURL, newObj)
    return request.then(res=>res.data)
}

const update=(id,newObj)=>{
    const request=axios.put(`${baseURL}/${id}`, newObj)
    return request.then(res=>res.data)
}

export default {
    getAll:getAll,
    create: create,
    update: update
}