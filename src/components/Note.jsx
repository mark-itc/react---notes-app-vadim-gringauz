import React from 'react'
import { useState } from 'react'
import DeleteButton from './DeleteButton'
import ConfirmDeleteModal from './ConfirmDeleteModal'

function Note (props) {
  const { note, index, handleRemoveNote, handleShowModal } = props
  const { date, text, title, lastEditDate } = note

  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false)
  }
  const handleShowConfirmModal = note => {
    setShowConfirmModal(true)
  }

  return (
    <div className='position-relative'>
      <div
        style={{ zIndex: '1' }}
        className='border shadow rounded p-2'
        onClick={() => handleShowModal(note, index)}
      >
        <div className='row'>
          <h3 style={{ overflowWrap: 'break-word' }}>{title}</h3>
        </div>
        <div className='row'>
          <p style={{ overflowWrap: 'break-word' }}>{text}</p>
        </div>
        <div className='row justify-content-between'>
          <h6>
            created: {date.toDateString()}, {date.toTimeString().split(' ')[0]}
          </h6>
          {lastEditDate && (
            <h6>
              last edit: {lastEditDate.toDateString()}, {lastEditDate.toTimeString().split(' ')[0]}
            </h6>
          )
          }
        </div>
      </div>
      <DeleteButton handleShowConfirmModal={handleShowConfirmModal} />
      <ConfirmDeleteModal
        show={showConfirmModal}
        onHide={handleCloseConfirmModal}
        index={index}
        handleRemoveNote={handleRemoveNote}
      />
    </div>
  )
}

export default Note
