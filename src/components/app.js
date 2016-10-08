import React, { Component, PropTypes } from 'react'
import Header from './app-header'
import Footer from './app-footer'
import { BrowserRouter, Match, Miss, Link, Redirect } from 'react-router'


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About {location.pathname}</h2>
  </div>
)

const NoMatch = () => (
  <h2>404 {location.pathname}</h2>
)

/**
 * Main body of app: Not much more than a container
 */
class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div>
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/about" component={About} />
            <Miss component={NoMatch}/>
          </div>
          < Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default Main
