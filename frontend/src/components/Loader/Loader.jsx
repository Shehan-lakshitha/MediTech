import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const Loader = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <HashLoader color='#2563EB'  />
    </div>
  )
}

export default Loader