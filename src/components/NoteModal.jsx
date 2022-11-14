import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from './Form'
import FullDate from './FullDate'

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
          Created at: <FullDate date={noteClicked.date} />
        </h6>
        <Form
          key={'edit' + formKey}
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
