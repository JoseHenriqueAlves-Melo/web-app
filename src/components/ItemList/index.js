import React from 'react';
import { useDispatch } from 'react-redux';
import './index.css'

const ItemList = ({ info }) => {
  const dispatch = useDispatch();
  function favorited( anime ) {
    console.log(info)
    return {
      type: 'FAVORITE_ANIME',
      payload: anime,
    };
  }
  return (
    <div className="container">
    {info.data && (
        <ul className="animes-list">
          {info.data.map((anime) => (            
            <li key={anime.id}>
              <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
              <h3>
              {anime.attributes.canonicalTitle}
              </h3>
              <p>
                {anime.attributes.ageRatingGuide}
              </p>
              <div className="button-actions">
                <button onClick={() => dispatch(favorited(anime))}>Favoritar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      </div>
  )
}

export default ItemList;