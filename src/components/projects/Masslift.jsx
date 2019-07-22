import React, { Component } from 'react'
import '../../stylesheet/intro.css'
import GifPlayer from 'react-gif-player'
import MassLiftImg from '../../../dist/masslift.png'


export class Masslift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true
    };
  }
  render() {
    return (
      <React.Fragment>
   
          <img className="image" src={MassLiftImg} />
     
        <GifPlayer
          className="massliftgif"
          gif="../../dist/Sample.gif"
          onTogglePlay={playing => this.setState({ playing })}
          autoplay
        />
      </React.Fragment>
    )
  }
}

export default Masslift
