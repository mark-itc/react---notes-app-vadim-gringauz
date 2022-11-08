import { useState, useEffect } from 'react'
import Note from './components/Note'
import Header from './components/Header'
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  const [notes, setNotes] = useState([])
  const defaultText = ''
  const defaultTitle = ''
  const [formKey, setFormKey] = useState(0)

  function handleAddNote (newNote) {
    setFormKey(formKey + 1)
    newNote.date = new Date()
    // console.log('add note', newNote)
    setNotes([...notes, newNote])
  }

  function handleRemoveNote (index) {
    if (window.confirm('Remove this note?')) {
      notes.splice(index, 1)
      const newNotesWithoutDeleted = [...notes]
      setNotes(newNotesWithoutDeleted)
    }
  }

  return (
    <>
      <Header />
      <div className='container d-flex flex-column align-items-center p-3'>
        <h1>Notes App</h1>
        <Form
          key={formKey}
          defaultText={defaultText}
          defaultTitle={defaultTitle}
          handleAddNote={handleAddNote}
        />
        {notes.length === 0 ? (
          <div className='p-5 fs-1'>No notes yet</div>
        ) : (
          <div className='container p-2'>
            <div className='row'>
              {notes.map((note, index) => (
                <div className='col-lg-2 col-md-6 mt-2 '>
                  <Note
                    key={'note-' + index}
                    note={note}
                    handleRemoveNote={handleRemoveNote}
                    index={index}
                  />
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
