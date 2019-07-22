import React, { Component } from 'react'
import '../stylesheet/intro.css'

export class AboutMe extends Component {
  render() {
    return (
      <div className="frame-2">

        <div className="main-menu">
          <a href="https://www.junjo.dev" target="_blank">

          <svg id="logoSvg" width={313} height={70} fill="none">
            <path className="one" d="M0 70V6.562C0 2.94 2.911 0 6.5 0h39C49.089 0 52 2.94 52 6.563V70L26 54.687 0 70z" fill="#3B3A3B" />
            <path className="two" d="M12.79 14.97h4.92v17.104c0 4.813-3.075 7.506-7.573 7.506-4.58 0-7.78-2.762-7.78-7.683h4.881c.041 2.064.985 3.322 2.83 3.322 1.819 0 2.721-1.217 2.721-3.145V14.971zm12.782 24.61c-1.777 0-3.035-1.258-3.035-2.857 0-1.6 1.258-2.858 3.035-2.858 1.71 0 2.967 1.258 2.967 2.858s-1.258 2.857-2.967 2.857zm16.201-24.61h4.922v17.104c0 4.813-3.076 7.506-7.574 7.506-4.58 0-7.78-2.762-7.78-7.683h4.895c.041 2.064.985 3.322 2.83 3.322 1.819 0 2.721-1.217 2.721-3.145V14.971h-.014z" fill="#FFED7E" />
          </svg>
          </a>
        </div>



        {/* middle frame */}

        <div className="container">
            {/* Left */}
            <div className="left-bar">
            </div>

          {/* Middle */}
          <div className="center-bar">
            <div className="msg-center">
              {/* <h1 className="line welcome-message-anim">Hi! I'm Jun </h1> */}
              <div className="msg-abt"> About Me </div>
              <div className="msg-detail">Hello! I'm Jun, a software engineer based in New York, NY who's passionate about building scalable websites and applications that provide seamless user experience. </div>
              {/* <p className="msg-detail">I have extensive experience in building full-stack application with a proficiency in React, Node, JS, Git, and RESTful APIs. </p> */}
              <p className="msg-detail">Here's a few technologies I've been working with recently: </p>

            </div>
          </div>



          {/* Right */}
          <div className="right-bar">
          </div>
        </div>

        <div className="bottom">
        </div>
        
      </div>
    )
  }
}

export default AboutMe
