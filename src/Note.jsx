import React from 'react'
import { useState } from 'react'


function Note(props) {
    const { note } = props
    const { date, text } = note

  return (
    <div>
        <div>{date.toUTCString()}</div>
        <div>{text}</div>
    </div>
  )
}

export default Note