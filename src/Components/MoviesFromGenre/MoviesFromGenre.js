import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Utils/useFetch'
import '../Utils/useFetch'
import { API_KEY, API_URL} from '../../api/requests'
import Movie from '../Movie/Movie'
import './MoviesFromGenre.scss'

function MoviesFromGenre () {
  const [pageNumber, setPageNumber] = useState(1)
  const { genreId } = useParams()
  const BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${pageNumber}`
  const { data: results, loading, error } = useFetch(BASE_URL, {results: []})
  const nextPage = () => {
    if(pageNumber < results.total_pages) {
      setPageNumber(pageNumber+1)
    }
  }

  const prevPage = () => {
    if(pageNumber > 1) {
      setPageNumber(pageNumber-1)
    }
  }
  console.log(results)
  return (
    <div className='movie-list-genre'>
      <div className='movies-container'>
        {
          loading ? ' Loading' :
            results.results.map(result => (
              <Movie key={result.id} result={result}/>
            ))
        }
        { error ? error : null }
      </div>
      <div className='movie-buttons'>
        <div className="button button-prev" onClick={prevPage}></div>
        <div className="button button-next" onClick={nextPage}></div>
      </div>
    </div>
  )
}

export default MoviesFromGenre;
