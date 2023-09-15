import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Tvs from './pages/Tvs';
import Celebrity from './pages/Celebrity';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Header from './components/Header';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';

import React from 'react';
import TvDetail from './pages/TvDetail';

function App() {
  return (
    <div className='root-wrap'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie' element={<Movies />} />
          <Route path='/movie/:title' element={<MovieDetail />} />
          <Route path='/tv/:id' element={<TvDetail />} />

          <Route path='/tv' element={<Tvs />} />
          <Route path='/person' element={<Celebrity />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
