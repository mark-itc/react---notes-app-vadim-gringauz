import React from 'react'
import Button from 'react-bootstrap/Button'

export default function SaveEditButton (props) {
  const { handleEditNote, newText, newTitle, newColor, onHide } = props

  const handleClick = () => {
    const newNote = { title: newTitle, text: newText, color: newColor }
    handleEditNote(newNote)
    onHide()
  }

  return (
    <>
      <Button variant='primary' onClick={handleClick} disabled={newText === ''}>
        Save & Close
      </Button>
    </>
  )
}
