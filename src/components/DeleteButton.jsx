import React from 'react'

function DeleteButton ({ handleRemoveNote, index }) {
  return (
    <div className='position-absolute top-0 end-0 p-1'>
      <button
        type='button'
        className='btn btn-light btn-sm'
        onClick={() => handleRemoveNote(index)}
      >
        X
      </button>
    </div>
  )
}
export default DeleteButton