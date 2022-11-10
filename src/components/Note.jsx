import React from 'react'
import { useState } from 'react'

import DeleteButton from './DeleteButton'

function Note (props) {
  const { note, index, handleRemoveNote, handleShowModal } = props
  const { date, text, title } = note

  

  return (
    <div
      className='border shadow rounded p-2 position-relative'
      onClick={() => handleShowModal(note)}
    >
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
      <DeleteButton handleRemoveNote={handleRemoveNote} index={index}/>

      
    </div>
  )
}

export default Note
