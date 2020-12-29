//commonJS modules
const http =require ('http')
const express = require('express')
const { networkInterfaces } = require('os')
const app = express()

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]
// ===============================================================================
// TO CREATE HTTP MODULE APP

// const app= http.createServer((req, res)=>{
    // res.writeHead(200,{'Content-Type':'text/plain'})
//     res.writeHead(200,{'Content-Type':'application/json'})
//     res.end(JSON.stringify(notes))
// })

// ===============================================================================

// TO CREATE EXPRESS SERVER APP

app.get('/', (req, res)=>{
  res.send('<h1>static server message</h1>')
})

app.get('/api/notes',(req, res)=>{
  res.json(notes)
})

app.get('/api/notes/:id',(req,res)=>{
  const id=Number( req.params.id)
  const note=notes.find(note=>note.id === id   )
  if (note){
    res.json(note)
  }
  else{
    res.status(404).end()
  }
})

app.delete('/api/notes/:id',(req, res)=>{
  const id=Number (req.params.id)
  notes=notes.filter(note=> note.id===id)

  res.send(204).end()
})
/// ***
/// middleware  /// The json-parser we used earlier takes the raw data from the requests that's stored in the request object,
//  parses it into a JavaScript object and assigns it to the request object as a new property body.
app.use(express.json())
/// ***

const createMaxId=()=>{
  const createId= notes.length>0? Math.max(...notes.map(note=>note.id)):0
  return createId +1
}

app.post('/api/notes/',(req,res)=>{
  const body =req.body
  if(!body){
    return res.status(404).json({"error":"content is empty"})
  }
const note={
  id:createMaxId(),
  content: body.content,
  date: new Date(),
  important: body.important || false
}
  
notes=notes.concat(note)
res.json(note)

})

const port =3001
app.listen(port)
// console.log(`server running on ${port}`);