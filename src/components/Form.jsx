import React from 'react'
import { useState, useEffect } from 'react'
import AddButton from './AddButton'

function Form (props) {
  const { defaultText, handleAddNote } = props
  // const newNote = { text: 'txt' }
  const [text, setText] = useState(defaultText)
  const [isEditText, setIsEditText] = useState(false)
  
  useEffect(() => {
    setText(defaultText)
  }, [])

  function handleOnFocus () {
    // console.log('focus')
    setIsEditText(true)
  }

  function handleOnBlur () {
    // console.log('lost focus')
    setTimeout(() => {
      setIsEditText(false)
    }, 200)
  }

  return (
    <div className='border shadow rounded p-1 w-100 sticky-top bg-white'>
      <textarea
        className='border-0 w-100 form-control'
        name='note-text'
        rows='5'
        placeholder='Write a note...'
        onChange={e => setText(e.target.value)}
        value={text}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <div className='position-absolute bottom-0 end-0 p-3'>
        {isEditText && <AddButton handleAddNote={handleAddNote} text={text} />}
      </div>
    </div>
  )
}
export default Form
