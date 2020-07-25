// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band Name:</label>
          <input type='text'
            onChange={this.handleOnChange}
            value={this.state.name}
          />
          <label>Add Band</label>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default BandInput
