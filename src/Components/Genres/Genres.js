import React from 'react'
import Genre from '../Genre/Genre'
import useFetch from '../Utils/useFetch'
import { API_KEY, API_URL} from '../../api/requests'

function Genres () {
  const BASE_URL = `${API_URL}genre/movie/list?api_key=${API_KEY}`
  const { data: genres, loading, error } = useFetch(BASE_URL, {genres: []})
  return (
    <div className='genres'>
      {
        loading ? 'Loading' :
          genres.genres.map(genre => (
            <Genre key={genre.id} genre={genre} />
          ))
      }
      { error ? error : null }
    </div>
  )
}

export default Genres;
