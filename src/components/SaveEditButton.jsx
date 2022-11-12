import React from 'react'
import Button from 'react-bootstrap/Button'

export default function SaveEditButton (props) {
  const { handleEditNote, newText, newTitle, onHide } = props

  const handleClick = () => {
    const newNote = { title: newTitle, text: newText }
    handleEditNote(newNote)
    onHide()
  }

  return (
    <>
      <Button variant='primary' onClick={handleClick}>
        Save & Close
      </Button>
    </>
  )
}
