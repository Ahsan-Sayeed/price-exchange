import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center py-10'>
        <div>
            image
        </div>
        <div className=''>
            <a href="#" className='mx-2'>Terms of Use</a>
            <a href="#" className='mx-2'>Privacy</a>
            <a href="#" className='mx-2'>Policy</a>
            <a href="#" className='mx-2'>License</a>
            <a href="#" className='mx-2'>Agreement</a>
        </div>
    </div>
  )
}

export default Footer