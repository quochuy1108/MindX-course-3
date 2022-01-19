import React from 'react'

const SearchItem = (props) => {

    const image = 'https://image.tmdb.org/t/p/w500' + props.image
    return (
        <div className="search-item-container">
            <div className="search-item__img">
                <img src={image} alt='' />
            </div>

            <div className="search-item__inner">
                <div className="search-item__title">{props.title}</div>
                <div className="search-item__date">{props.date}</div>
                <div className="search-item__overview">{props.overview}</div>
            </div>
        </div>


    )
}

export default SearchItem
