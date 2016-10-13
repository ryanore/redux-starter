import React, { Component, PropTypes } from 'react'
import Routes from '../routes'
import Header from './app-header'
import Footer from './app-footer'

export default () => (
  <div className="app-container">
    <Header />
    <Routes />
    <Footer />
  </div>
)
