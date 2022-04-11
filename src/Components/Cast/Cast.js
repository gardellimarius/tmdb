import React from 'react'
import './Cast.scss'

function Credit (props) {
  const {castMember} = props;
  return (
    <div className='credit'>
       <div name='cast-image'style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${castMember.profile_path})` }}>
       </div>
       <h3>{castMember.name}</h3>
       <h3>{`as`}</h3>
       <h3>{castMember.character}</h3>
    </div>
  )
}

export default Credit;
