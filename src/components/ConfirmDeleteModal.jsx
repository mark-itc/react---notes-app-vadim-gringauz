import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function ConfirmDeleteModal ({ show, onHide, index, handleRemoveNote }) {
  const handleYesClick = () => {
    handleRemoveNote(index)
    onHide()
  }
  
  return (
    <Modal
      show={show}
      onHide={onHide}
      keyboard={false}
      size='sm'
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete Note?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleYesClick}>
          Yes...
        </Button>
        <Button variant='secondary' onClick={onHide}>
          No!
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmDeleteModal
