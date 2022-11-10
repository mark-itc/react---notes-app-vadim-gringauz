import { useState, useEffect } from 'react'
import NotesList from './components/NotesList'
import Header from './components/Header'
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

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
    if (window.confirm('Remove this note?')) {
      notes.splice(index, 1)
      const newNotesWithoutDeleted = [...notes]
      setNotes(newNotesWithoutDeleted)
    }
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

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop='static'
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>
            Created at: {noteClicked.date.toDateString()},{' '}
            {noteClicked.date.toTimeString().split(' ')[0]}
          </h6>
          <h1>{noteClicked.title}</h1>
          <p>{noteClicked.text}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant='primary'>Save*</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default App
// {noteClicked ?
//   <h3>Title</h3>
//   <p>{noteClicked.text}</p>

//   : <span>no note</span>}
