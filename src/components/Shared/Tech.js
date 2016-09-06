import React, { Component } from 'react'

class Tech extends Component {

  render() {

    return(
      <div className="tech section" id="technologies">
        <h1>Technologies</h1>
        <div className="tech-wrap">
          <div className="img-wrap">
            <img src={require('../../img/node.png')}/>
          </div>
          <div className="img-wrap">
            <img src={require('../../img/react.png')}/>
          </div>
        </div>
      </div>
    )

  }

}

export default Tech
