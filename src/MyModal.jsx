import React from 'react'

const MyModal = ({visible}) => {
    if (!visible) return null ;
  return (
    <div className='fixed bg-gray-300 bg-opacity-30 flex justify-center items-center'>
        <button className='bg-gray-800'>
        MyModal
        </button>
        MyModal</div>
  )
}

export default MyModal