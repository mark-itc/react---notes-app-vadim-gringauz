import React from 'react'

function Header ({ clearAll }) {
  return (
    <header>
      <h6 className='text-secondary text-right w-100' onClick={clearAll}>
        VG / ITC / React / Milestone-6 v0.1
      </h6>
    </header>
  )
}

export default Header
