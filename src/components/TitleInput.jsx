import React from 'react'

function TitleInput ({ title, handleTitleChange }) {
  return (
    <input
      type='text'
      className='fs-3 border-0 w-100 form-control'
      placeholder='Title'
      onChange={e => handleTitleChange(e.target.value)}
      value={title}
    />
  )
}
export default TitleInput
