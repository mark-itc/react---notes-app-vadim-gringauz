import React from 'react'

function FullDate({ date }) {
  return (
    <span>
      {date.toDateString()}, {date.toTimeString().split(' ')[0]}
    </span>
  )
}
export default FullDate