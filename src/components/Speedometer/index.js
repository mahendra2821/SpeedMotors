import {Component} from 'react'
import './index.css'

class Speedmeter extends Component {
  state = {count: 0}

  Increament = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }
  Decreament = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="bg-containerr">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speed-img"
          />
          <h1 className="speed-heading">Speed is {count}mph</h1>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button className="button" type="button" onClick={this.Decreament}>
              Accelerate
            </button>
            <button className="button1" type="button" onClick={this.Increament}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedmeter
