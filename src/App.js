import React from 'react'
import { Router, Link } from 'react-static'

import Routes from 'react-static-routes'

import './app.css';

const App = () => (
  <Router>
    <div>
      <nav className="nav">
        <Link exact to="/" className="nav__link">
          Home
        </Link>
        <Link to="/new-post" className="nav__link">New Post</Link>
      </nav>
      <main className="container">
        <Routes />
      </main>
    </div>
  </Router>
)

export default App
