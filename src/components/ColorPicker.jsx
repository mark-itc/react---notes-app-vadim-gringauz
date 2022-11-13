import React from 'react'

function ColorPicker ({ setColor }) {
  const size = '30px'
  return (
    <div className='d-flex flex-column'>
      <button
        
        className='btn btn-light border rounded-circle me-1'
        style={{ width: size, height: size }}
        onClick={() => setColor('light')}
      ></button>
      <button
        data-bs-toggle="button"
        className='btn btn-warning border rounded-circle me-1'
        style={{ width: size, height: size }}
        onClick={() => setColor('warning')}
      ></button>
      <button
        className='btn btn-success border rounded-circle me-1'
        style={{ width: size, height: size }}
        onClick={() => setColor('success')}
      ></button>
      <div
        className='btn btn-danger border rounded-circle me-1'
        style={{ width: size, height: size }}
        onClick={() => setColor('danger')}
      ></div>
    </div>
  )
}
export default ColorPicker
