import React from 'react'
import { useState } from 'react'

function TextInput ({ text, handleOnFocus, handleOnBlur, handleTextChange }) {
  const [height, setHeight] = useState('22px')

  const autoResize = e => {
    setHeight('auto')
    setHeight(e.target.scrollHeight - 16 + 'px')
  }

  return (
    <>
      <textarea
        autoFocus
        className='fs-5 border-0 form-control w-100 mt-1 bg-transparent'
        name='note-text'
        placeholder='Write a note...'
        onChange={e => handleTextChange(e.target.value)}
        value={text}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        row={1}
        style={{
          resize: 'none',
          height: height,
          overflow: 'hidden'
        }}
        onInput={autoResize}
      />
    </>
  )
}
export default TextInput
