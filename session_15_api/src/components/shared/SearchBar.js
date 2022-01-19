import { useState } from 'react'
import './SearchBar.css'
const SearchBar = ({ onSearch }) => {

    const [searchValue, setSearchValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchValue)
    }


    return (
        <div className="form-search-container">
            <form className="form-search">
                <input
                    value={searchValue}
                    type="text"
                    placeholder="Search movies, TV show"
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar
