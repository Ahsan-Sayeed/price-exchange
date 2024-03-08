import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center h-48 py-5 bg-transparent text-center'>
            <h1 className='text-5xl font-bold'>Claim <span className='text-warning bold'>Moca ID</span> Now!</h1>
            <div className='flex justify-center items-center my-2 border border-0 py-2 rounded-full px-4 backdrop-blur-3xl bg-base-200'>
                <h2 className='text-xl font-bold'>Already reserved a spot? Claim Here</h2>
                <button className="btn btn-warning rounded-full border border-black mx-2">
                       claim now!
                    </button>
            </div>
    </div>
  )
}

export default Banner