import React, { Component } from 'react'

import Header from './Shared/Header'
import Hero from './Shared/Hero'
import Tech from './Shared/Tech'
import Projects from "./Shared/Projects"
import About from "./Shared/About"
import Contact from "./Shared/Contact"

class Index extends Component {

  render() {

    return(
      <div id="container">
        <Header/>
        <Hero/>
        <Tech/>
        <Projects/>
        <About/>
        <Contact/>
      </div>
    )

  }

}

export default Index
