import React, { Component } from 'react'
import { Link } from 'react-router'

export default () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/protected">Protected</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
    <hr />
  </div>
)
