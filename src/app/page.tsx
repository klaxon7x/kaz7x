import React from 'react'
import Nav from './components/navbar/navbar';
import Homepage from './components/home/homepage'


export const page = () => {
  return (
    <div>
      <Nav/>
      <Homepage/>
    </div>
  )
}

export default page