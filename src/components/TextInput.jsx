import React from 'react'
import { useState } from 'react'

function TextInput ({ text, handleOnFocus, handleOnBlur, handleTextChange }) {
  const [height, setHeight] = useState('22px')

  const autoResize = e => {
    console.log('scrollHeight=', e.target.scrollHeight)
    console.log('rows=', e.target.rows)
    // setHeight(60)
    console.log('height 60?=', height)
    setHeight('auto')
    console.log('scrollHeight after reset=', e.target.scrollHeight)
    setHeight(e.target.scrollHeight - 16 + 'px')
    console.log('height final=', height)
  }

  return (
    <>
      <textarea
        className='border-0 form-control w-100 mt-1'
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
        onInput={e => autoResize(e)}
      />
    </>
  )
}
export default TextInput
{
  /* <div 
          className='bg-danger'
          style={{overflow: 'hidden', wordWrap: 'break-word'}}
        >{text}</div> */
}
