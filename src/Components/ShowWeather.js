import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ShowWeatherForm extends Component {
  constructor (props) {
    super(props)
  }

  render () {
  const weathData = this.props.weathData
 
   if (!weathData) { return <div>Загрузка данных по температуре</div> }
    const weather = weathData.weather[0]
    
    const path= "/long/"+this.props.zip
    console.log(path)
    return (<div>
      <div className="w3-container w3-light-green">
        <h2>
          {weather.main} в {weathData.name}
        </h2>
      </div>
      <p>Текущая температура: {weathData.main.temp}°</p>
      <p>Самая высокая темп.: {weathData.main.temp_max}°</p>
      <p>Самая низкая темп.: {weathData.main.temp_min}°</p>
      <p>Скорость ветра: {weathData.wind.speed} м/ч</p>
      <p></p>
      <p></p>
      <Link to={path+"&cnt=3"} className="w3-text-blue w3-button w3-light-green" >Посмотреть температуру на 3 дня</Link>
      <p></p>
      <p></p>
      <Link to={path+"&cnt=7"} className="w3-text-blue w3-button w3-light-green" >Посмотреть температуру на 7 дней</Link>
      <p></p>
      <p></p>
      <Link to={path+"&cnt=10"} className="w3-text-blue w3-button w3-light-green" >Посмотреть температуру на 10 дней</Link>
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
      return <Cmp  weathData={this.state.weatherData} zip={this.props.zip}/>
    }
  };
}

export const ShowWeather = withGetWeather (ShowWeatherForm);