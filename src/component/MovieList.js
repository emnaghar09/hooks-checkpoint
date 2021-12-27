import React from 'react'
import './list.css'
import MovieCard from './MovieCard';

function MovieList({movieList}) {
    return (
<div className="movieList">
    { movieList.map((el, key)=> <MovieCard key={key} movie={el}/>)}
</div>

    )}
export default MovieList;