import React from 'react'
import { useState } from 'react'
import DeleteButton from './DeleteButton'
import ConfirmDeleteModal from './ConfirmDeleteModal'
import FullDate from './FullDate'
import './Note.css'

function Note (props) {
  const { note, index, handleRemoveNote, handleShowModal } = props
  const { date, text, title, lastEditDate, color } = note

  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false)
  }
  const handleShowConfirmModal = note => {
    setShowConfirmModal(true)
  }

  return (
    <div className='Note position-relative'>
      <div
        className={`border shadow rounded p-2 bg-${color}`}
        onClick={() => handleShowModal(note, index)}
      >
        <div className='title row'>
          <h3>{title}</h3>
        </div>
        <div className='text row'>
          <p>
            {text}
          </p>
        </div>
        <div className='row justify-content-between'>
          <h6>
            created: <FullDate date={date} />
          </h6>
          {lastEditDate && (
            <h6>
              last edit: <FullDate date={lastEditDate} />
            </h6>
          )}
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
