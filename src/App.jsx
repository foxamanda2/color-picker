import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 255),
    saturation: Math.floor(Math.random() * 255),
    light: Math.floor(Math.random() * 100),
  }

  handleOnChangeHue = event => {
    this.setState({ hue: event.target.value })
    console.log(this.state.hue)
  }
  handleOnChangeSaturation = event => {
    this.setState({ saturation: event.target.value })
    console.log(this.state.saturation)
  }
  handleOnChangeLight = event => {
    this.setState({ light: event.target.value })
    console.log(this.state.light)
  }
  // componentDidMount(event) {
  //   let random = Math.floor(Math.random() * 255)
  //   this.setState({ hue: event.target.random }),
  //     this.setState({ saturation: event.target.random }),
  //     this.setState({ light: event.target.random })
  // }

  render() {
    return (
      <div>
        <h1>Color Picker</h1>
        <div
          className="ColorBox"
          style={{
            backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${this.state.light}%)`,
          }}
        ></div>
        <div>
          <input
            className="hue-slider"
            type="range"
            min={0}
            max={255}
            value={this.state.hue}
            onChange={this.handleOnChangeHue}
          />
          <div className="hue">Hue:{this.state.hue}</div>
          <input
            className="saturation-slider"
            type="range"
            min={0}
            max={255}
            value={this.state.saturation}
            onChange={this.handleOnChangeSaturation}
          />
          <div className="saturation">Saturation:{this.state.saturation}</div>
          <input
            className="light-slider"
            type="range"
            min={0}
            max={100}
            value={this.state.light}
            onChange={this.handleOnChangeLight}
          />
          <div className="light">Light:{this.state.light}</div>
        </div>
        <button onClick={this.componentDidMount}>Randomize</button>
      </div>
    )
  }
}
