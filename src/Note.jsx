import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Note (props) {
  const { note } = props
  const { date, text } = note

  return (
    <div className='border shadow p-2 '>
        <div className="row">
            <div className="col">
                <h6 className=''>{date.toLocaleString()}</h6>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <p style={{overflowWrap: 'break-word'}}>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default Note
