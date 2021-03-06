import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: Math.floor(Math.random() * 100),
    light: Math.floor(Math.random() * 100),
    alpha: Math.round(Math.random() * 1 * 100) / 100,
  }

  handleOnChangeHue = event => {
    this.setState({ hue: event.target.value })
  }

  handleOnChangeSaturation = event => {
    this.setState({ saturation: event.target.value })
  }

  handleOnChangeLight = event => {
    this.setState({ light: event.target.value })
  }
  handleOnChangeAlpha = event => {
    this.setState({ alpha: event.target.value })
  }

  handleRandom = () => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
      saturation: Math.floor(Math.random() * 100),
      light: Math.floor(Math.random() * 100),
      alpha: Math.round(Math.random() * 1 * 100) / 100,
    })
  }

  render() {
    document.body.style.backgroundColor = `hsl(${this.state.hue},${this.state.saturation}%,${this.state.light}%,${this.state.alpha})`
    return (
      <div>
        <h1>Color Picker</h1>

        <div>
          <input
            className="hue-slider"
            type="range"
            min="0"
            max="360"
            value={this.state.hue}
            onChange={this.handleOnChangeHue}
          />
          <div className="hue">Hue:{this.state.hue}</div>

          <input
            className="saturation-slider"
            type="range"
            min="0"
            max="100"
            value={this.state.saturation}
            onChange={this.handleOnChangeSaturation}
          />
          <div className="saturation">Saturation:{this.state.saturation}</div>

          <input
            className="light-slider"
            type="range"
            min="0"
            max="100"
            value={this.state.light}
            onChange={this.handleOnChangeLight}
          />
          <div className="light">Light:{this.state.light}</div>

          <input
            className="alpha-slider"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={this.state.alpha}
            onChange={this.handleOnChangeAlpha}
          />
          <div className="alpha">Alpha:{this.state.alpha}</div>
          <footer>
            hsla({this.state.hue}, {this.state.saturation}%, {this.state.light}
            %, {this.state.alpha})
          </footer>
        </div>
        <div>
          <button onClick={this.handleRandom}>Randomize</button>
        </div>
      </div>
    )
  }
}
