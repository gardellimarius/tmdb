import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Layouts/Navbar/Navbar'
import Layouts from './Pages/Layouts.js'
import MoviesFromGenre from './Components/MoviesFromGenre/MoviesFromGenre'
import MovieDetails from './Components/MovieDetails/MovieDetails'



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/*' element={<Layouts />} />
          <Route path=':genreId/' element={<MoviesFromGenre />}/>
          <Route path=':genreId/:movieId' element={<MovieDetails />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
