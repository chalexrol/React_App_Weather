import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ShowWeatherForm extends Component {
    constructor (props) {
      super(props)
    }
  
    render () {
    const weathData = this.props.weathData
  
    if (!weathData) { return <div>Загрузка данных по температуре</div> }

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return (
        <div className="w3-card w3-margin w3-display-topmiddle">
         <div className="w3-container w3-light-green">
         <h2>Погода на 3 дня в {weathData.city.name}</h2></div>
         {weathData.list.map((d,id) => (
            <div key={id} className="w3-card-4 w3-cell" >
              <header className="w3-container w3-blue"> 
              <h2>{new Date(d.dt*1000).toLocaleString("ru", options)}</h2></header> 
              <p className="w3-margin">  Температура днем: {d.temp.day}°</p>
              <p className="w3-margin" >  Температура ночью.: {d.temp.night}°</p>
              <p className="w3-margin" >  Самая низкая темп.: {d.temp.min}°</p>
            </div>
         ))}     
         <p><Link to="/" >Вернутся назад</Link></p>
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
        const zip = this.props.match.params.zipId
        const URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' +
        zip +
        '&cnt=3&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric'
  
        fetch(URL).then(res => res.json()).then(json => {
          this.setState({ weatherData: json })
          }) 
         
      }
  
      render() {
        return <Cmp  weathData={this.state.weatherData} />
      }
    };
  }
  
  export const ShowMore = withGetWeather (ShowWeatherForm);