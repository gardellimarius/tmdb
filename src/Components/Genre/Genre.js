import React from 'react'
import { Link } from 'react-router-dom'

function Genre (props) {
  const {genre} = props;
  return (
    <div className='genre'>
      <Link to={`/${genre.id}/`}> {genre.name} </Link>
    </div>
  )
}

export default Genre;
