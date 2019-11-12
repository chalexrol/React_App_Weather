/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import './App.css'
import './w3.css'
import { ShowWeather } from './Components/ShowWeather'
import { AddNewPlace } from './Components/AddNewPlace'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activePlace: 0,
      addPlace: 0,
      places: this.props.places

    }
    this.handlePlaceSubmit = this.handlePlaceSubmit.bind(this)
  }

  handlePlaceSubmit (place) {
    const updatedPlaces = this.state.places.concat(place)
    this.setState(
      { places: updatedPlaces }
    )
  }

  render () {
    const activePlace = this.state.activePlace

    return (
      <div className="App ">

        <div key="cont001" className= "w3-sidebar w3-green w3-bar-block">
          <h2> Погода </h2>

          {this.state.places.map((place, index) => (

            <button
              className="w3-bar-item w3-button tablink"
              key={index}
              onClick={() => {
                this.setState({
                  activePlace: index,
                  addPlace: 0
                })
              }}
            >
              {place.name}
            </button>

          ))}

          <button
            className="w3-bar-item w3-button tablink"
            key= "addPlace"
            onClick={() => {
              this.setState({ addPlace: 1 })
            }}
          >
            Новый город
          </button>
        </div>

        {(this.state.addPlace === 0)
          ? <ShowWeather
            className="w3-container"
            key = {activePlace}
            zip={this.state.places[activePlace].zip} />
          : <AddNewPlace
            key = "addPlace"
            onPlaceSubmit={this.handlePlaceSubmit}
          />

        }

      </div>

    )
  }
}

export default App
