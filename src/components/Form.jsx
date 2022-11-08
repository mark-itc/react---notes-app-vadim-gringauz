import React from 'react'
import { useState } from 'react'
import AddButton from './AddButton'

function Form (props) {
  const { defaultText, defaultTitle, handleAddNote } = props
  // const newNote = { text: 'txt' }
  const [text, setText] = useState(defaultText)
  const [title, setTitle] = useState(defaultTitle)
  const [isEditText, setIsEditText] = useState(false)

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
      <input
        type='text'
        className='border-0 w-100 form-control'
        placeholder='Title...'
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        className='border-0 w-100 form-control mt-1'
        name='note-text'
        rows='5'
        placeholder='Write a note...'
        onChange={e => setText(e.target.value)}
        value={text}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <div className='position-absolute bottom-0 end-0 p-3'>
        {isEditText && <AddButton handleAddNote={handleAddNote} text={text} title={title} />}
      </div>
    </div>
  )
}
export default Form
