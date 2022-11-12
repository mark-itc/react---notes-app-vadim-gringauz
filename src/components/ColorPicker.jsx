import React from 'react'

function ColorPicker ({ setColor }) {
  const size = '40px'
  return (
    <div className='d-flex'>
      <button
        className='btn btn-light border rounded'
        style={{ width: size, height: size }}
        onClick={() => setColor('light')}
      ></button>
      <button
        className='btn btn-warning border rounded'
        style={{ width: size, height: size }}
        onClick={() => setColor('warning')}
      ></button>
      <button
        className='btn btn-success border rounded'
        style={{ width: size, height: size }}
        onClick={() => setColor('success')}
      ></button>
      <div
        className='btn btn-danger border rounded'
        style={{ width: size, height: size }}
        onClick={() => setColor('danger')}
      ></div>
    </div>
  )
}
export default ColorPicker
