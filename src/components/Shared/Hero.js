import React, { Component } from 'react'

class Hero extends Component {

  render() {

    return(
      <div className="hero">
        <img src={require("../../img/hero.jpg")}/>
      </div>
    )

  }

}

export default Hero
