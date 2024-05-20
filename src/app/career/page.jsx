import Image from 'next/image'
import React from 'react'
import Banner from '../../../public/Banner.png'

const page = () => {
  return (
    <div className='container'>
      <div>
        <Image src={Banner} alt='banner' priority/>
      </div>
      <div className='mt-8'>
        <h1 className=''>Career at Beautybooth</h1>
      </div>
      <div></div>
    </div>
  )
}

export default page
