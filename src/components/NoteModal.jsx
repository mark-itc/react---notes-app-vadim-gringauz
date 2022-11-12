import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from './Form'

function NoteModal (props) {
  const {
    show,
    onHide,
    noteClicked,
    handleAddNote,
    formKey,
    handleEditNote
  } = props
  return (
    <Modal show={show} onHide={onHide} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>
          Created at: {noteClicked.date.toDateString()},{' '}
          {noteClicked.date.toTimeString().split(' ')[0]}
        </h6>
        <Form
          key={formKey}
          defaultText={noteClicked.text}
          defaultTitle={noteClicked.title}
          handleAddNote={handleAddNote}
          handleEditNote={handleEditNote}
          onHide={onHide}
          type={'edit'}
        />
      </Modal.Body>
    </Modal>
  )
}

export default NoteModal
