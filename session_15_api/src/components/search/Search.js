import React from 'react'
import SearchItem from '../shared/SearchItem'
const Search = (props) => {
    return (
        <div>
            <div>Search Results</div>
            <div>
                {props.movies.map(movie => {
                    return <SearchItem
                        key={movie.id}
                        title={movie.title}
                        date={movie.release_date}
                        image={movie.poster_path}
                        overview={movie.overview} />
                })}
            </div>
        </div>
    )
}

export default Search
