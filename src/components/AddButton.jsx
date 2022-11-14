import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function AddButton (props) {
  const { handleAddNote, text, title, color } = props

  const handleClick = (e) => {
    const newNote = { title: title, text: text, color: color }
    handleAddNote(newNote)
  }

  return (
    <>
      {text && (
        <button
          type='button'
          className='AddButton btn btn-secondary fs-1 fw-bolder rounded-circle p-0'
          onClick={handleClick}
          style={{ width: '50px', height: '50px' }}
        >
          +
        </button>
      )}
    </>
  )
}
