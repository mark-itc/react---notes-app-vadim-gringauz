import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function NoteModal ({ show, onHide, noteClicked }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop='static'
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>
          Created at: {noteClicked.date.toDateString()},{' '}
          {noteClicked.date.toTimeString().split(' ')[0]}
        </h6>
        <h1>{noteClicked.title}</h1>
        <p>{noteClicked.text}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Close
        </Button>
        <Button variant='primary' disabled>
          Save*
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NoteModal
