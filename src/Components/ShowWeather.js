import React, { Component } from 'react'

class ShowWeatherForm extends Component {
  constructor (props) {
    super(props)
  }

  render () {
  const weatherData =  this.props.weatherData
    if (!weatherData) { return <div>Загрузка данных по температуре</div> }
    const weather = weatherData.weather[0]
    return (<div>
      <div className="w3-container w3-light-green">
        <h2>
          {weather.main} в {weatherData.name}

        </h2>
      </div>

      <p>Текущая температура: {weatherData.main.temp}°</p>
      <p>Самая высокая темп.: {weatherData.main.temp_max}°</p>
      <p>Самая низкая темп.: {weatherData.main.temp_min}°</p>
      <p>Скорость ветра: {weatherData.wind.speed} м/ч</p>
    </div>)
  }
}

function withGetWeather (Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        weatherData: ''
      };
    }

    componentDidMount () {
      const zip = this.props.zip
      const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' +
      zip +
      '&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric'

      fetch(URL).then(res => res.json()).then(json => {
        this.setState({ weatherData: json })
        }) 
    }

    render() {
      return <Cmp  weatherData={this.state.weatherData} />
    }
  };
}

export const ShowWeather = withGetWeather (ShowWeatherForm);