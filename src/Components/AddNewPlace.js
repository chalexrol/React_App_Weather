// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

export class AddNewPlace extends Component {
  constructor (props) {
    super(props)

    this.handlePlaceSubmit = this.handlePlaceSubmit.bind(this)
  }

  handlePlaceSubmit (e) {
    e.preventDefault()

    if (this.refs.placeZip.value.length > 0) {
      this.props.onPlaceSubmit({
        name: this.refs.placeName.value,
        zip: this.refs.placeZip.value
      })
    }

    // сбросим данные
    this.refs.placeName.value = ''
    this.refs.placeZip.value = ''
  }

  createPlace (e) {
    e.preventDefault()

    var place = {
      name: this.refs.placeName.value,
      zip: this.refs.placeZip.value
    }

    if (typeof place.zip === 'string' && place.zip.length > 0) {
      const places = this.props.places
      places.push(place)
    }
  }

  render () {
    return (
      <div >
        <div className="w3-container w3-red">
          <h2>Новый город</h2>
        </div>

        <form className="w3-container " ref="placeForm">

          <p>
            <label className="w3-text-teal"> <b>Название: </b></label>
            <input type="text" id="placeItem" placeholder="пр. Владивосток" ref="placeName" />

          </p>
          <p>
            <label className="w3-text-teal"><b> Почтовый индекс: </b></label>
            <input type="text" id="placeZip" placeholder="пр. 690000" ref="placeZip" />

          </p>
          <button className="w3-btn w3-teal" onClick={this.handlePlaceSubmit} >Добавить</button>

        </form>
      </div>
    )
  }
};
