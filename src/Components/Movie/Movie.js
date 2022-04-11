import React from 'react'
import { Link } from 'react-router-dom'
import './Movie.scss'

function Movie (props) {
  const {result} = props;
  return (
    <div className='movie'>
      <Link to={`/${result.genre_ids[0]}/${result.id}`}>
        <div className='movie-poster' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${result.poster_path})` }}>
        </div>
        <div className='movie-title'>
          {result.title}
        </div>
      </Link>
    </div>
  )
}

export default Movie;
