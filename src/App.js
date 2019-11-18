import React, { Component } from 'react'
import './App.css'
import './w3.css'
import { ShowWeather } from './Components/ShowWeather'
import  AddNewPlace from './Components/AddNewPlace'
import { connect } from 'react-redux';

class App extends Component {
  constructor (props) {
    super(props)
     this.state = {
      activePlace: 0,
      addPlace: 0
     } 
  }

  render () {
    const activePlace = this.state.activePlace
    return (
      <div className="App ">

        <div key="cont001" className= "w3-sidebar w3-green w3-bar-block">
          <h2> Погода </h2>
          {this.props.zip.map((zip,id) => (
            <button
              className="w3-bar-item w3-button tablink"
              key={id}
              onClick={() => {
                this.setState({
                  activePlace: id,
                  addPlace: 0
                })
              }} >
              {this.props.city[id]}
            </button>
          ))}
          <button
            className="w3-text-red w3-bar-item w3-button tablink "
            key= "addPlace"
            onClick={() => {
              this.setState({ addPlace: 1 })
            }}>
            Новый город
          </button>
        </div>
         {(this.state.addPlace === 0)
          ? <ShowWeather
            className="w3-container"
            key = {activePlace}
            zip=  {this.props.zip[activePlace]} />
          : <AddNewPlace
            key = "addPlace"
          />
        }  
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    zip: state.zip,
    city: state.city
    
  };
}

export default connect(mapStateToProps)(App);