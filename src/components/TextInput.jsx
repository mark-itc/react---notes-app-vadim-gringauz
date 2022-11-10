import React from 'react'

function TextInput({ text, handleOnFocus, handleOnBlur, handleTextChange}) {
  return (
    <textarea
        className='border-0 w-100 form-control mt-1'
        name='note-text'
        rows='5'
        placeholder='Write a note...'
        onChange={e => handleTextChange(e.target.value)}
        value={text}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
  )
}
export default TextInput