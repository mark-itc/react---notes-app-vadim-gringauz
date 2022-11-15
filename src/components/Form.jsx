import React from 'react'
import { useState, useEffect } from 'react'
import AddButton from './AddButton'
import SaveEditButton from './SaveEditButton'
import TextInput from './TextInput'
import TitleInput from './TitleInput'
import ColorPicker from './ColorPicker'
import AddReminderButton from './AddReminderButton'

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
  const [reminderTime, setReminderTime] = useState('')
  const [isReminderActivated, setIsReminderActivated] = useState(false)
  const [isEditText, setIsEditText] = useState(false)

  const handleTextChange = newValue => setText(newValue)
  const handleTitleChange = newValue => setTitle(newValue)
  const handleOnFocus = () => setIsEditText(true)
  const handleOnBlur = () =>
    setTimeout(() => {
      setIsEditText(false)
    }, 200)

  const widthClass =
    type === 'new' ? 'form-max-width sticky-top' : 'w-100 sticky-top'

  useEffect(() => {
    if (reminderTime != '') setIsReminderActivated(true)
  }, [reminderTime])

  return (
    <div className={widthClass}>
      <div className='d-flex w-100'>
        <ColorPicker setColor={setColor} />
        <div className={`border shadow rounded p-1 w-100 bg-${color}`}>
          <TitleInput title={title} handleTitleChange={handleTitleChange} />
          <TextInput
            text={text}
            handleOnFocus={handleOnFocus}
            handleOnBlur={handleOnBlur}
            handleTextChange={handleTextChange}
          />
        </div>
        <AddReminderButton
          setReminderTime={setReminderTime}
          isReminderActivated={isReminderActivated}
        />
      </div>
      <div
        className='d-flex w-100 justify-content-end mt-1'
        style={{ height: '50px' }}
      >
        {type === 'new' ? (
          text.replace(/(\r\n|\n|\r)/gm, '') != '' && (
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
    </div>
  )
}
export default Form
// calssName if I want the button over the textarea:
// className='position-absolute bottom-0 end-0 p-3'
