import React from 'react'

function Header ({ clearAll }) {
  return (
    <header>
      <h6 className='text-secondary text-right w-100' onClick={clearAll}>
        VG / ITC / React / Milestone-8 v0.3
      </h6>
    </header>
  )
}

export default Header
