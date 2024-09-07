import { useEffect, useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Movie from './components/Movie.jsx';
import FavMovie from './components/FavMovie.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { addFav, removeFav } from './store/actions/FavAction';
import { addMovie, removeMovie } from './store/actions/MoviesAction';

function App() {
  const [sira, setSira] = useState(0);
  const favorites = useSelector((store) => store.fav.favList);
  const movieList = useSelector((store) => store.movies.movieList);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  function sonrakiFilm() {
    if (sira < movieList.length) {
      setSira(sira + 1);
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }
  function oncekiFilm() {
    if (sira >= 1) {
      setSira(sira - 1);
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }
  const handleAddFavorite = () => {
    const currentMovie = movieList[sira];
    dispatch(addFav(currentMovie));
    dispatch(removeMovie(currentMovie.id));
    
    
  };
  useEffect(()=>{
    console.log(movieList);
  } ,[movieList])

  
  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira}  />
          {movieList.length === 0 && (
            <div className="text-center">Eklenecek yeni film bulunamadı...</div>
          )}
          <div className="flex gap-3 justify-end py-3">
            
              <button
                onClick={oncekiFilm} disabled={!(sira >= 1)}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 disabled:text-blue-300 disabled:border-blue-300"
              >
                Önceki
              </button>
            
            
              <button
                onClick={sonrakiFilm} disabled={!(sira < movieList.length-1)}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 disabled:text-blue-300 disabled:border-blue-300"
              >
                Sıradaki
              </button>
            

            <button
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
              onClick={handleAddFavorite}
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favorites.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
