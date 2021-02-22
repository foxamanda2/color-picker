import React, { Component } from 'react'

// CSS
// const styles = styled.div{

// }
export class Slider extends Component {
  state = {
    value: 0,
  }

  handleOnChange = event => {
    return this.setState({ value: event.target.value })
  }
  render() {
    return (
      <div>
        <input
          className="slider"
          type="range"
          min={0}
          max={255}
          value={this.state.value}
          onChange={this.handleOnChange}
        />
        <div className="value">{this.state.value}</div>
      </div>
    )
  }
}
export class App extends Component {
  handleUpdateColor = () => {
    const red = this.state.color
  }
  state = {
    color: '000000',
  }

  render() {
    return (
      <div>
        <h1>Color Picker</h1>
        <h2>
          <Slider
            color="#0076D9"
            hexColor="red"
            handleUpdateColor={this.HandleUpdateColor}
          />
          <Slider
            color="#0076D9"
            hexColor="red"
            handleUpdateColor={this.HandleUpdateColor}
          />
          <Slider
            color="#0076D9"
            hexColor="red"
            handleUpdateColor={this.HandleUpdateColor}
          />
        </h2>
      </div>
    )
  }
}
