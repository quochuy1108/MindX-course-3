
import { useState } from 'react'
import SearchBar from './components/shared/SearchBar'
// https://api.themoviedb.org/3/movie/550?api_key=f2a04dd3c1a9a93e775a950a38748c91
import Search from './components/search/Search'
function App() {

  const [searchedMovies, setSearchedMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (searchText) => {
    setIsLoading(true)
    const res = await fetch('https://api.themoviedb.org/3/search/movie?api_key=f2a04dd3c1a9a93e775a950a38748c91&query=' + searchText)

    const resJson = await res.json()
    console.log(resJson);
    setSearchedMovies(resJson.results)
    setIsLoading(false)
  }


  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {isLoading ? <div> ... </div> : <Search movies={searchedMovies} />}

    </div>
  );
}

export default App;
