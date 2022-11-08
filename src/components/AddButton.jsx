import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function AddButton (props) {
  const { handleAddNote, text } = props
  function handleClick () {
    const newNote = { text: text }
    handleAddNote(newNote)
  }

  return (
    <>
      <button
        type='button'
        className='btn btn-secondary p-0 fs-3 fw-bolder rounded-circle'
        onClick={handleClick}
        style={{ width: '50px', height: '50px' }}
      >
        +
      </button>
    </>
  )
}
