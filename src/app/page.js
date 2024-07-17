import React from 'react'
import Hero from '../components/Home/Hero'
import Trending from '../components/Home/Trending'
import Browse from '../components/Home/Browse'
import Creators from '../components/Home/Creators'

const page = () => {
  return (
    <div>
       <Hero />
       <Trending />
       <Browse />
       <Creators />

    </div>
  )
}

export default page
