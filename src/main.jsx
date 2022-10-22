import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/Home/index';
import Search from './pages/Search/index';
import { Movie } from './pages/Movie/index'; 
import {BrowserRouter, Route, Routes} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="movie/:id" element={<Movie/>}/>
          <Route path="search" element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
)
