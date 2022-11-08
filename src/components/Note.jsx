import React from 'react'

function Note (props) {
  const { note, index, handleRemoveNote } = props
  const { date, text, title } = note

  return (
    <div className='border shadow rounded p-2 position-relative'>
      <div className='row justify-content-between'>
        <h6 className=''>
          {date.toDateString()}, {date.toTimeString().split(' ')[0]}
        </h6>
      </div>
      <div className='row'>
        <h3 style={{ overflowWrap: 'break-word' }}>{title}</h3>
      </div>
      <div className='row'>
        <p style={{ overflowWrap: 'break-word' }}>{text}</p>
      </div>
      <div className='position-absolute top-0 end-0 p-1'>
        <button
          type='button'
          className='btn btn-secondary btn-sm'
          onClick={() => handleRemoveNote(index)}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default Note
