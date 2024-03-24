import React from 'react'
import Nav from './components/navbar/navbar';
import Homepage from './components/home/homepage'
// import About from './components/about/about'


export default function page () {
  return (
    <div>
      <Nav/>
      <Homepage/>
      {/* <About/> */}
    </div>
  )
}

