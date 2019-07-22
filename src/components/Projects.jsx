import React, { Component } from 'react'

import '../stylesheet/intro.css'
import Main from './projects/Main.jsx'
import Badegg from './projects/Badegg.jsx'
import Masslift from './projects/Masslift.jsx'
import BitcoinChart from './projects/BitcoinChart.jsx'
import SVGAnim from './projects/SVGAnim.jsx'
import SpeechRec from './projects/SpeechRec.jsx'
import { Router, Route, IndexRoute } from 'react-router'

export class Projects extends Component {
  constructor() {
    super();
    this.state = {
      view: 'main',
    }
  }


  changeView(option) {
    this.setState({
      view: option
    });
  }

  renderView() {
    const {view} = this.state;

    if (view === 'main') {
      return <Main
        handleClick={() => this.changeView('main')} />;
    } else if (view === 'badegg') {
      return <Badegg 
      handleClick={() => this.changeView('badegg')} />;
    }  else if (view === 'masslift') {
      return <Masslift 
      handleClick={() => this.changeView('masslift')} />;
    } else if (view === 'bitchart') {
      return <BitcoinChart
      handleClick={() => this.changeView('bitchart')} />;
    } else if (view === 'svganim') {
      return <SVGAnim
      handleClick={() => this.changeView('svganim')}   />;
    } else if (view === 'speechrec') {
      return <SpeechRec 
      handleClick={() => this.changeView('speechrec')} />;
    }
   
  }

  render() {
    return (
      <div className="frame-3">

        <div className="main-menu">
          <a href="https://www.junjo.dev" target="_blank">

          <svg id="logoSvg" width={313} height={70} fill="none">
            <path className="svgOne" d="M0 70V6.562C0 2.94 2.911 0 6.5 0h39C49.089 0 52 2.94 52 6.563V70L26 54.687 0 70z" fill="#3B3A3B" />
            <path className="svgTwo" d="M12.79 14.97h4.92v17.104c0 4.813-3.075 7.506-7.573 7.506-4.58 0-7.78-2.762-7.78-7.683h4.881c.041 2.064.985 3.322 2.83 3.322 1.819 0 2.721-1.217 2.721-3.145V14.971zm12.782 24.61c-1.777 0-3.035-1.258-3.035-2.857 0-1.6 1.258-2.858 3.035-2.858 1.71 0 2.967 1.258 2.967 2.858s-1.258 2.857-2.967 2.857zm16.201-24.61h4.922v17.104c0 4.813-3.076 7.506-7.574 7.506-4.58 0-7.78-2.762-7.78-7.683h4.895c.041 2.064.985 3.322 2.83 3.322 1.819 0 2.721-1.217 2.721-3.145V14.971h-.014z" fill="#FFED7E" />
          </svg>
          </a>
        </div>



        {/* middle frame */}
        <div className="container">
            {/* Left */}
            <div className="left-bar">
            </div>

          {/* Middle */}
          <div className="center-col">

           <div className="left-col">
           <h1 className="headerProject"> Recent Projects </h1>
            <ul className="wrapper">
              <ul 
                  className={this.state.view === "main" ? "active" : "default"}
                  onClick={() => this.changeView('main')}>
                Overview
              </ul>
              <ul 
                  className={this.state.view === "badegg" ? "active" : "default"}
                  onClick={() => this.changeView('badegg')}>
                Badegg
              </ul>
              <ul 
                className={this.state.view === "masslift" ? "active" : "default"}
                onClick={() => this.changeView('masslift')}>
                MassLift
              </ul>
              <ul 
                className={this.state.view === "bitchart" ? "active" : "default"}
                onClick={() => this.changeView('bitchart')}>
                Bitcoin Chart
              </ul>
              <ul 
                className={this.state.view === "svganim" ? "active" : "default"}
                onClick={() => this.changeView('svganim')}>
                SVG Animation
              </ul>
              <ul 
                className={this.state.view === "speechrec" ? "active" : "default"}
                onClick={() => this.changeView('speechrec')}>
                Speech Recognition
              </ul>
            
            </ul>
           </div>

          <div className="right-col"> 
            {this.renderView()}
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

export default Projects
