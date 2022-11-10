import React from 'react'
import { useState } from 'react'
import AddButton from './AddButton'
import TextInput from './TextInput'
import TitleInput from './TitleInput'

function Form (props) {
  const { defaultText, defaultTitle, handleAddNote } = props
  // const newNote = { text: 'txt' }
  const [text, setText] = useState(defaultText)
  const [title, setTitle] = useState(defaultTitle)
  const [isEditText, setIsEditText] = useState(false)

  const handleTextChange = newValue => setText(newValue)
  const handleTitleChange = newValue => setTitle(newValue)
  const handleOnFocus = () => setIsEditText(true)
  const handleOnBlur = () =>
    setTimeout(() => {
      setIsEditText(false)
    }, 200)

  return (
    <div className='border shadow rounded p-1 w-100 sticky-top bg-white'>
      <TitleInput title={title} handleTitleChange={handleTitleChange} />
      <TextInput
        text={text}
        handleOnFocus={handleOnFocus}
        handleOnBlur={handleOnBlur}
        handleTextChange={handleTextChange}
      />
      <div className='position-absolute bottom-0 end-0 p-3'>
        {isEditText && (
          <AddButton handleAddNote={handleAddNote} text={text} title={title} />
        )}
      </div>
    </div>
  )
}
export default Form
