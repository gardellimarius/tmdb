import React from 'react'
import useFetch from '../Utils/useFetch'
import '../Utils/useFetch'
import { API_KEY, API_URL} from '../../api/requests'
import Movie from '../Movie/Movie'
import './MoviesFromType.scss'
import { useMediaQuery } from 'react-responsive'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function MoviesFromType (props) {
  const { type } = props;
  const BASE_URL = `${API_URL}movie/${type}?api_key=${API_KEY}`
  const { data: results, loading, error } = useFetch(BASE_URL, {results: []})

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 500px)' })

  return (
    <div className='movie-list-type'>
      <div className='movie-type'>
        {type}
      </div>
      {isMobile &&
        <div className='movie-container'>
          <Carousel showTumbs={false} showIndicators={false} swipeable={false} showStatus={false}>
          {
            loading ?
             'Loading' :
            results.results.map(result => (
              <Movie key={result.id} result = {result} />
            ))
          }
          </Carousel>
          {error ? error : null}
        </div>
      }
      {isDesktop &&
        <div className='movie-container'>
          {
            loading ?
             'Loading' :
            results.results.map(result => (
              <Movie key={result.id} result = {result} />
            ))
          }
          {error ? error : null}
        </div>
      }
    </div>
  )
}

export default MoviesFromType;
