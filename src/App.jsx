import { useState, useEffect } from 'react'
import NotesList from './components/NotesList'
import NoteModal from './components/NoteModal'
import Header from './components/Header'
import Form from './components/Form'
import localforage from 'localforage'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const NOTES_STORAGE_KEY = 'notesApp.notes'
const REMOVED_NOTES_STORAGE_KEY = 'notesApp.removed'

function App () {
  const [notes, setNotes] = useState([])
  const [removedNotes, setRemovedNotes] = useState([])
  const defaultText = ''
  const defaultTitle = ''
  const defaultColor = 'light'
  const [formKey, setFormKey] = useState(0)

  const handleAddNote = newNote => {
    setFormKey(formKey + 1)
    newNote.date = new Date()
    setNotes([...notes, newNote])
  }

  const handleEditNote = newNote => {
    newNote.date = notes[noteIndexToEdit].date
    newNote.lastEditDate = new Date()
    const newNotes = [...notes]
    newNotes.splice(noteIndexToEdit, 1, newNote)
    setNotes(newNotes)
  }

  const handleRemoveNote = index => {
    const removedNote = notes.splice(index, 1)
    const newNotesWithoutDeleted = [...notes]
    setNotes(newNotesWithoutDeleted)
    setRemovedNotes(...removedNotes, removedNote)
  }

  const [noteClicked, setNoteClicked] = useState({
    date: new Date('1/1/2020'),
    lastEditDate: null,
    title: 'empty title',
    text: 'empty text',
    color: 'light'
  })
  const [noteIndexToEdit, setNoteIndexToEdit] = useState()

  const [showModal, setShowModal] = useState(false)
  const handleCloseModal = () => {
    setShowModal(false)
  }
  const handleShowModal = (note, index) => {
    setShowModal(true)
    setNoteClicked({ ...note })
    setNoteIndexToEdit(index)
  }

  useEffect(() => {
    localforage.setItem(NOTES_STORAGE_KEY, notes)
  }, [notes])

  useEffect(() => {
    localforage.setItem(REMOVED_NOTES_STORAGE_KEY, removedNotes)
  }, [removedNotes])

  useEffect(() => {
    const retrieveNotes = async () => {
      const notesFromStorage = await localforage.getItem(NOTES_STORAGE_KEY)
      if (notesFromStorage) setNotes(notesFromStorage)

      const removedNotesFromStorage = await localforage.getItem(
        REMOVED_NOTES_STORAGE_KEY
      )
      if (removedNotesFromStorage) setRemovedNotes(removedNotesFromStorage)
    }
    retrieveNotes()
  }, [])

  const clearAll = () => {
    setNotes([])
    setRemovedNotes([])
  }

  return (
    <>
      <Header clearAll={clearAll} />
      <div className='container responsive-width d-flex flex-column align-items-center p-3'>
        <h1 className='p-2'>Notes++</h1>
        <Form
          key={'new' + formKey}
          defaultText={defaultText}
          defaultTitle={defaultTitle}
          defaultColor={defaultColor}
          handleAddNote={handleAddNote}
          type={'new'}
        />
        <NotesList
          key={'notes-list-' + notes.length}
          notes={notes}
          handleRemoveNote={handleRemoveNote}
          handleShowModal={handleShowModal}
        />
      </div>
      <NoteModal
        show={showModal}
        onHide={handleCloseModal}
        noteClicked={noteClicked}
        handleAddNote={handleAddNote}
        handleEditNote={handleEditNote}
        formKey={formKey}
      />
    </>
  )
}

export default App
