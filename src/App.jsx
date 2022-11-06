import { useState, useEffect } from 'react'
import Note from './Note'

function App () {
  const [notes, setNotes] = useState([])
  // const [text, setText] = useState("my note")
  // useEffect(() => {
  //   console.log('new text:', text);
  // }, [text])

  const newNote = {text: 'txt'}

  function handleAddNote () {
    newNote.date = new Date()
    // console.log('add note', newNote)
    setNotes([...notes, newNote])
  }

  return (
    <div>
      <textarea
        name='note-text'
        id='text'
        cols='50'
        rows='10'
        onChange={e => (newNote.text = e.target.value)}
      />
      <br />
      <button onClick={handleAddNote}>Add</button>
      {notes.length === 0 ? (
        <div>No notes yet</div>
      ) : (
        notes.map((note, index) => <Note key={'note-' + index} note={note} />)
      )}
    </div>
  )
}

export default App
