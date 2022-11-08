import React from 'react'
import AddButton from './AddButton'

function Form (props) {
  const { value, handleAddNote } = props
  const newNote = { text: 'txt' }

  return (
    <div className='border shadow rounded p-1 w-100 sticky-top bg-white position-relative'>
      <textarea
        className='border-0 w-100'
        name='note-text'
        rows='5'
        placeholder='Write a note...'
        onChange={e => (newNote.text = e.target.value)}
        // value={value}
        // ref={noteTextRef}
      />
      <div className='position-absolute bottom-0 end-0 p-3'>
        <AddButton handleAddNote={handleAddNote} newNote={newNote}/>
      </div>
    </div>
  )
}
export default Form
