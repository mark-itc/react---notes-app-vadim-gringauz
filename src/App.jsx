import { useState, useEffect } from 'react'
import Note from './components/Note'
import Header from './components/Header'
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  const [notes, setNotes] = useState([])
  // const [text, setText] = useState("my note")
  // useEffect(() => {
  //   console.log('new text:', text);
  // }, [text])

  function handleAddNote (newNote) {
    newNote.date = new Date()
    // console.log('add note', newNote)
    setNotes([...notes, newNote])
  }

  return (
    <>
      <Header/>
      <div className='container d-flex flex-column align-items-center p-3'>
        <h1>Notes App</h1>
        <Form value='123' handleAddNote={handleAddNote}/>
        {notes.length === 0 ? (
          <div className='p-5 fs-1'>No notes yet</div>
        ) : (
          <div className='container p-2'>
            <div className='row'>
              {notes.map((note, index) => (
                <div className='col-lg-2 col-md-6 mt-2 '>
                  <Note key={'note-' + index} note={note} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
