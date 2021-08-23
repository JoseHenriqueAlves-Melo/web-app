import React from 'react';
import { useSelector } from 'react-redux';


const Favorites = () => {
    const { newValue } = useSelector(state => state.favoriteReducer)
    console.log(newValue)
    return (
        <>
        <h1>Favorites</h1>
        {newValue?.map(favorited => (
            <h2 key={favorited.id}>{favorited.attributes.canonicalTitle}</h2>
        ))}
        </>
        )
}

export default Favorites;