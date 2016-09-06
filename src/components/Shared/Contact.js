import React, { Component } from "react"

class Contact extends Component {
  render () {
    return(
      <div className="section contact" id="contacts">
        <h1>Contact</h1>
        <h2>Phone #: 123-456-7890</h2>
        <h2>Email: hello@jeffmlho.com</h2>
        <form action="https://formspree.io/hello@jeffmlho.com" method="POST">
          <p>Name</p>
          <input type="text" name="name"/>
          <p>Email</p>
          <input type="email" name="_replyto"/>
          <p>Message</p>
          <textarea name="message"></textarea>
          <input type="submit" value="Send"/>
        </form>
      </div>
    )
  }
}

export default Contact
