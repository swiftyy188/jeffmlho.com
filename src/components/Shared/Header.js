import React, { Component } from 'react'

class Header extends Component {

  goTo(element, e) {
    var ElementSelector = document.querySelector(element)
    var ScrollTop = ElementSelector.offsetTop
    var HeaderSelector = document.querySelector("#header-container")
    var HeaderHeight = window.getComputedStyle(HeaderSelector, null).getPropertyValue("height")
    var HeaderHeight = parseFloat(HeaderHeight.replace("px", ""))
    console.log(ScrollTop, HeaderHeight)
    window.scrollTo(0, ScrollTop - HeaderHeight)
  }

  render() {

    return(
      <div id="header-container">
        <div id="header">
          <img src={require('../../img/title.png')}/>
        </div>
        <div id="header-menu">
          <a onClick={this.goTo.bind(this, "#technologies")}>Technologies</a>
          <a onClick={this.goTo.bind(this, "#projects")}>Projects</a>
          <a onClick={this.goTo.bind(this, "#aboutme")}>About Me</a>
          <a onClick={this.goTo.bind(this, "#contacts")}>Contacts</a>
        </div>
      </div>
    )

  }

}

export default Header
