import React from 'react'
import Note from './Note'

function NotesList ({
  notes,
  handleRemoveNote,
  handleShowModal,
  isListOfRemoved
}) {
  return (
    <>
      {notes.length === 0 ? (
        <div className='p-5 fs-1'>No notes yet</div>
      ) : (
        <div className='container p-2'>
          <div className='row'>
            {notes.map((note, index) => (
              <div className='col-lg-2 col-md-6 mt-2 '>
                {isListOfRemoved ? (
                  <Note
                    isRemovedNote
                    key={'removed-note-' + index}
                    note={note}
                    handleRemoveNote={handleRemoveNote}
                    index={index}
                    handleShowModal={handleShowModal}
                  />
                ) : (
                  <Note
                    key={'note-' + index}
                    note={note}
                    handleRemoveNote={handleRemoveNote}
                    index={index}
                    handleShowModal={handleShowModal}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
export default NotesList
