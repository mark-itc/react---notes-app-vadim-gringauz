import React from 'react'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DeleteButton from './DeleteButton'

function Note (props) {
  const { note, index, handleRemoveNote } = props
  const { date, text, title } = note

  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
    console.log('close!');
  }
  const handleShow = () => setShow(true)

  return (
    <div
      className='border shadow rounded p-2 position-relative'
      onClick={handleShow}
    >
      <div className='row justify-content-between'>
        <h6 className=''>
          {date.toDateString()}, {date.toTimeString().split(' ')[0]}
        </h6>
      </div>
      <div className='row'>
        <h3 style={{ overflowWrap: 'break-word' }}>{title}</h3>
      </div>
      <div className='row'>
        <p style={{ overflowWrap: 'break-word' }}>{text}</p>
      </div>
      <DeleteButton handleRemoveNote={handleRemoveNote} index={index}/>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary'>Save*</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Note
