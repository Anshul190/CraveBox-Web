import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, Route, Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const appRouter = createBrowserRouter([{
  path: '/',
  element: <App />
},{
  path: '/home',
  element: <Home />
},{
  path: '/about',
  element: <About />
},{
  path: '/contact',
  element: <Contact />
},{
  path: 'grocery',
  element: <Grocery />
}])
