import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton'

function DeleteButton ({ handleShowConfirmModal }) {
  return (
    <div style={{ zIndex: '99' }} className='position-absolute top-0 end-0 p-1'>
      <CloseButton onClick={handleShowConfirmModal} />
    </div>
  )
}
export default DeleteButton
