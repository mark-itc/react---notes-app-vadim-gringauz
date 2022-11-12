import React from 'react'
import { useState } from 'react'

function TextInput ({ text, handleOnFocus, handleOnBlur, handleTextChange }) {
  const [height, setHeight] = useState('22px')

  const autoResize = e => {
    setHeight('auto')
    setHeight(e.target.scrollHeight - 16 + 'px')
    console.log('rsize1');
  }

  const handleKeyDown = (e) => {
    // console.log(e)
    // if (e.keyCode === 13) {
    //   console.log('enter');
    //   handleTextChange(e.target.value + '\n')
    // } 
  }

  return (
    <>
      <textarea
        className='fs-5 border-0 form-control w-100 mt-1'
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
        onKeyDown={handleKeyDown}        
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
