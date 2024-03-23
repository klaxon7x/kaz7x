"use client"
import React from 'react'
import Cards from '../cards/Cards1';
import Cards2 from '../cards/Cards2'
import Chip from '@mui/joy/Chip';
import useSound from 'use-sound';

export const homepage = () => {

  return (
    <div className='home-banner-container' >
      <div className='text-con'>
        <Cards />
      </div>
      <div className="text-con">
        <h1>swudhead666  </h1>
        <p className='Ppx'>Am I confusing you? <br></br>My sort of personal webpage, currently in the works. </p>
        <div className='p2'>
          <Cards2 />

        </div>
      </div>
    </div>


  )
}

export default homepage
