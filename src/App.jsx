import { useState, useEffect } from 'react'
import Note from './Note'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  const [notes, setNotes] = useState([])
  // const [text, setText] = useState("my note")
  // useEffect(() => {
  //   console.log('new text:', text);
  // }, [text])

  const newNote = { text: 'txt' }

  function handleAddNote () {
    newNote.date = new Date()
    // console.log('add note', newNote)
    setNotes([...notes, newNote])
  }

  return (
    <>
      <h6 className='text-secondary text-right w-100'>
        Milestone-1 v0.2
      </h6>
      <div className='container d-flex flex-column align-items-center p-3'>
        <h1>Notes App</h1>
        <div className='border shadow rounded p-3 w-100'>
          <textarea
            className='border-0 w-100'
            name='note-text'            
            rows='10'
            placeholder='Write a note...'
            onChange={e => (newNote.text = e.target.value)}
          />
          <br />
          <button
            type='button'
            className='btn btn-secondary w-100'
            onClick={handleAddNote}
          >
            Add
          </button>
        </div>
        {notes.length === 0 ? (
          <div>No notes yet</div>
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
