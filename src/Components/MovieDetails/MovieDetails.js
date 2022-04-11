import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Utils/useFetch'
import './MovieDetails.scss'
import Credits from '../Credits/Credits'
import '../Utils/useFetch'
import { useMediaQuery } from 'react-responsive'
import { API_KEY, API_URL} from '../../api/requests'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

function MovieDetails () {
  const { movieId } = useParams()

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 500px)' })

  const BASE_URL = `${API_URL}/movie/${movieId}?api_key=${API_KEY}`
  const { data: movie, loading, error } = useFetch(BASE_URL, {movie: []});

  const getMovieRuntime = () => {
    const hours = Math.floor(movie.runtime/60)
    const minutes = movie.runtime%60
    return `${hours}h ${minutes}m`
  }

  return (
    <div className='movie-details'>
    {isMobile &&
      <>
        <div className='movie-details-background-mobile' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})` }}>
        </div>
        <div className='movie-details-content'>
          <div className='movie-details-content--title'>
            <h2> {movie.title} </h2>
          </div>
          <div className='movie-details-content--header'>
            <div className='movie-details-content--header--runtime'>
              <h3>{getMovieRuntime()}</h3>
            </div>
            <div className='movie-details-content--header--vote-average'>
              <CircularProgressbar value={movie.vote_average*10} text={`${movie.vote_average*10}%`} />
            </div>
          </div>
          <div className='movie-details-content--description' >
            <h3>Overview</h3>
            <h3>{movie.overview}</h3>
          </div>
          <Credits movieId={movie.id}/>
        </div>
      </>
    }
    {isDesktop &&
      <>
        <div className='movie-details-background-desktop' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
        </div>
        <div className='movie-details-content'>
          <div className='movie-details-content--title'>
            <h2> {movie.title} </h2>
          </div>
          <div className='movie-details-content--header'>
            <div className='movie-details-content--header--runtime'>
              <h3>{getMovieRuntime()}</h3>
            </div>
            <div className='movie-details-content--header--vote-average'>
              <CircularProgressbar value={movie.vote_average*10} text={`${movie.vote_average*10}%`} />
            </div>
          </div>
          <div className='movie-details-content--description' >
            <h3>Overview</h3>
            <h3>{movie.overview}</h3>
          </div>
          <Credits movieId={movie.id}/>
        </div>
      </>
    }
    </div>
  )
}

export default MovieDetails;
