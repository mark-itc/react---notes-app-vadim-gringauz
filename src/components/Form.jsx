import React from 'react'
import { useState } from 'react'
import AddButton from './AddButton'
import SaveEditButton from './SaveEditButton'
import TextInput from './TextInput'
import TitleInput from './TitleInput'
import ColorPicker from './ColorPicker'

function Form (props) {
  const {
    defaultText,
    defaultTitle,
    defaultColor,
    handleAddNote,
    handleEditNote,
    onHide,
    type
  } = props

  const [text, setText] = useState(defaultText)
  const [title, setTitle] = useState(defaultTitle)
  const [color, setColor] = useState(defaultColor)
  const [isEditText, setIsEditText] = useState(false)

  const handleTextChange = newValue => setText(newValue)
  const handleTitleChange = newValue => setTitle(newValue)
  const handleOnFocus = () => setIsEditText(true)
  const handleOnBlur = () =>
    setTimeout(() => {
      setIsEditText(false)
    }, 200)

  return (
    <>
      <div className={`border shadow rounded p-1 w-100 sticky-top bg-${color}`}>
        <TitleInput title={title} handleTitleChange={handleTitleChange} />
        <TextInput
          text={text}
          handleOnFocus={handleOnFocus}
          handleOnBlur={handleOnBlur}
          handleTextChange={handleTextChange}
        />
      </div>
      <div
        className='d-flex w-100 justify-content-between mt-1'
        style={{ height: '50px' }}
      >
        <ColorPicker setColor={setColor} />
        {type === 'new' ? (
          isEditText && (
            <AddButton
              handleAddNote={handleAddNote}
              text={text}
              title={title}
              color={color}
            />
          )
        ) : (
          <SaveEditButton
            handleEditNote={handleEditNote}
            newText={text}
            newTitle={title}
            newColor={color}
            onHide={onHide}
          />
        )}
      </div>
    </>
  )
}
export default Form
// calssName if I want the button over the textarea:
// className='position-absolute bottom-0 end-0 p-3'
