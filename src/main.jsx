import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'
import Movies from './Movies.jsx'
import MovieVideoPlayer from './MovieVideoPlayer.jsx'
import TVSeries from './TVSeries.jsx'
import TVSeriesVideoPlayer from './TVSeriesVideoPlayer.jsx'
import Documentaries from './Documentaries.jsx'
import Categories from './Categories.jsx'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'
import Notifications from './Notifications.jsx'
import ErrorPage from './ErrorPage.jsx'
import Search from './Search.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/home" element={<App />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:idx" element={<MovieVideoPlayer />}/>
        <Route path="/tvseries" element={<TVSeries />}/>
        <Route path="/tvseries/:idx" element={<TVSeriesVideoPlayer />}/>
        <Route path="/documentaries" element={<Documentaries />}/>
        <Route path="/categories" element={<Categories />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/notifications" element={<Notifications />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
