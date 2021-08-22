import React from 'react';
import { useSelector } from 'react-redux';


const Favorites = () => {
    const { data } = useSelector(state => state)
    console.log(data)
    return (
        <>
        <h1>Favorites</h1>
        {data?.map(favorited => (
            <h2>{favorited.canonicalTitle}</h2>
        ))}
        </>
        )
}

export default Favorites;