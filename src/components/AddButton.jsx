import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function AddButton (props) {
  const { handleAddNote, text, title, color } = props

  const handleClick = e => {
    const newNote = { title: title, text: text, color: color }
    handleAddNote(newNote)
  }

  return (
    <>
      {text && (
        <button
          type='button'
          className='btn btn-secondary fs-2 rounded-circle p-0'
          onClick={handleClick}
          style={{ width: '50px', height: '50px' }}
        >
          <FontAwesomeIcon icon={faPlus} size='lg' />
        </button>
      )}
    </>
  )
}
