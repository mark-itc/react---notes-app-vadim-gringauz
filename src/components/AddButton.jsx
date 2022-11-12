import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function AddButton (props) {
  const { handleAddNote, text, title, color } = props

  const handleClick = () => {
    const newNote = { title: title, text: text, color: color }
    handleAddNote(newNote)
  }

  return (
    <>
      {text && (
        <button
          type='button'
          className='btn btn-secondary p-0 fs-3 fw-bolder rounded-circle'
          onClick={handleClick}
          style={{ width: '50px', height: '50px' }}
        >
          +
        </button>
      )}
    </>
  )
}
