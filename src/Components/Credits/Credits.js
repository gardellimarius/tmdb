import React from 'react'
import useFetch from '../Utils/useFetch'
import { API_KEY, API_URL} from '../../api/requests'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive'
import Cast from '../Cast/Cast'

function Credits (props) {
  const { movieId } = props;
  const BASE_URL = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  const { data: credits, loading, error } = useFetch(BASE_URL, {credits: []})

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 500px)' })

  return (
    <div className='credits'>
    <h2>Cast</h2>
    {isMobile &&
      <Carousel showTumbs={false} showIndicators={false} showStatus={false}>
        {loading ? (
          "Loading"
           ) : credits && credits.cast ? (
             credits.cast.map((castMember) => <Cast key={castMember.id} castMember={castMember}/>)
           ) : (
          <div>{"Error fetching credits"}</div>
        )}
      </Carousel>
    }
    {isDesktop &&
      <Carousel showTumbs={false} showIndicators={false} centerSlidePercentage = {20} centerMode={true} showStatus={false}>
        {loading ? (
          "Loading"
           ) : credits && credits.cast ? (
             credits.cast.map((castMember) => <Cast key={castMember.id} castMember={castMember}/>)
           ) : (
          <div>{"Error fetching credits"}</div>
        )}
      </Carousel>
    }
    </div>
  )
}

export default Credits;
