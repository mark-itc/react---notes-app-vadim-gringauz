import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { Offcanvas } from 'react-bootstrap'

function AddReminderButton ({ setReminderTime, isReminderActivated }) {
  const [time, setTime] = useState('')

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => {
    const currentDate = new Date()
    const curremtTime = currentDate.toTimeString().split(' ')[0]
    setTime(curremtTime)
    setShow(true)
  }

  const handleTimeChange = value => {
    setTime(value)
  }

  const handleSave = () => {
    setReminderTime(time)
    handleClose()
  }


  return (
    <div>
      <button
        type='button'
        className='AddButton btn btn-dark rounded-circle p-0'
        onClick={handleShow}
        style={{ width: '30px', height: '30px' }}
      >
        <FontAwesomeIcon icon={faBell} />
        {isReminderActivated && <>!</>}
      </button>

      <Offcanvas show={show} onHide={handleClose} placement='bottom'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Set a reminder</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='d-flex'>
            <input
              className='form-control fs-1'
              type='time'
              name='reminder-time'
              value={time}
              onChange={e => handleTimeChange(e.target.value)}
            />
            <button className='btn btn-secondary m-2' onClick={handleSave}>Save</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
export default AddReminderButton
