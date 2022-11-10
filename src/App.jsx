import { useState, useEffect } from 'react'
import NotesList from './components/NotesList'
import Header from './components/Header'
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import NoteModal from './components/NoteModal'

function App () {
  const [notes, setNotes] = useState([])
  const defaultText = ''
  const defaultTitle = ''
  const [formKey, setFormKey] = useState(0)

  const handleAddNote = newNote => {
    setFormKey(formKey + 1)
    newNote.date = new Date()
    // console.log('add note', newNote)
    setNotes([...notes, newNote])
  }

  const handleRemoveNote = index => {
    notes.splice(index, 1)
    const newNotesWithoutDeleted = [...notes]
    setNotes(newNotesWithoutDeleted)
  }

  const [noteClicked, setNoteClicked] = useState({
    date: new Date('1/1/2020'),
    title: 'empty title',
    text: 'empty text'
  })

  const [showModal, setShowModal] = useState(false)
  const handleCloseModal = () => {
    setShowModal(false)
  }
  const handleShowModal = note => {
    setShowModal(true)
    setNoteClicked({ ...note })
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
        <NotesList
          notes={notes}
          handleRemoveNote={handleRemoveNote}
          handleShowModal={handleShowModal}
        />
      </div>
      <NoteModal
        show={showModal}
        onHide={handleCloseModal}
        noteClicked={noteClicked}
      />
    </>
  )
}

export default App
