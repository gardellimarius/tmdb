import React from 'react'
import MoviesFromType from '../Components/MoviesFromType/MoviesFromType'

function Layouts () {
  return (
    <div className='layouts'>
      <MoviesFromType type={'popular'}/>
      <MoviesFromType type={'upcoming'}/>
    </div>
  )
}

export default Layouts;
