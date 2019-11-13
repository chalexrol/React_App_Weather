import React, { Component } from 'react'

export class AddNewPlace extends Component {
  constructor (props) {
    super(props)
    this.state = {
      city:'',
       zip: ''
    };

    this.handlePlaceSubmit = this.handlePlaceSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeZip = this.handleChangeZip.bind(this);
  }

  handleChange(event) {
    this.setState({city: event.target.value});
  }

  handleChangeZip(event) {
    this.setState({zip: event.target.value});
  }  

  handlePlaceSubmit(e) {
    e.preventDefault()
    if (this.state.zip.length > 0) {
      this.props.onPlaceSubmit({
       city: this.state.city,
       zip: this.state.zip
      })
    }
    else alert('Вы не ввели ZIP');
    // сбросим данные
    this.state.city = ''
    this.state.zip = ''
  }

  render () {
    return (
      <div >
        <div className="w3-container w3-red">
          <h2>Новый город</h2>
        </div>

        <form className="w3-container " onSubmit={this.handlePlaceSubmit}>

          <p>
            <label className="w3-text-teal"> <b>Название: </b></label> 
            <input type="text" placeholder="пр. Владивосток" value={this.state.city} onChange={this.handleChange} />
          </p>
          <p>
            <label className="w3-text-teal"><b> Почтовый индекс: </b></label>
            <input type="text" id="placeZip" placeholder="пр. 690000" value={this.state.zip} onChange={this.handleChangeZip} />
          </p>
          <input type="submit" value="Submit" />

        </form>
      </div>
    )
  }
};
