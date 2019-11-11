import React, { Component } from 'react';
import './App.css';
import "./w3.css";


class ShowWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null
    };
  }
 componentDidMount() {
    const zip = this.props.zip;
    // данные взяты из http://api.openweathermap.org/data - 31 октября 2019
    // так как в задании сказано что данные положить в компонент 
    
    switch (zip) {
    case '426000': 
        this.setState({weatherData : {"coord":{"lon":53.21,"lat":56.87},"weather":[{"id":600,"main":"Снег","description":"light snow","icon":"13d"}],"base":"stations","main":{"temp":-3.33,"pressure":1004,"humidity":86,"temp_min":-3.33,"temp_max":-3.33},"wind":{"speed":1.34,"deg":24,"gust":5.36},"snow":{"3h":0.44},"clouds":{"all":100},"dt":1572515029,"sys":{"type":3,"id":2003018,"country":"RU","sunrise":1572492814,"sunset":1572526072},"timezone":14400,"id":554840,"name":"Ижевске","cod":200}});
    break;
    case '101000': 
        this.setState({weatherData : {"coord":{"lon":37.62,"lat":55.75},"weather":[{"id":803,"main":"Облака","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":-2.13,"pressure":1021,"humidity":63,"temp_min":-3,"temp_max":-1.11},"visibility":10000,"wind":{"speed":5,"deg":310},"clouds":{"all":75},"dt":1572516094,"sys":{"type":1,"id":9029,"country":"RU","sunrise":1572496341,"sunset":1572530028},"timezone":10800,"id":524901,"name":"Москве","cod":200}});
    break;
    default:
        this.setState({weatherData : {"coord":{"lon":30.32,"lat":59.94},"weather":[{"id":803,"main":"Облака","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":0.49,"pressure":1015,"humidity":80,"temp_min":-1.11,"temp_max":1.11},"visibility":10000,"wind":{"speed":4,"deg":210},"clouds":{"all":75},"dt":1572516137,"sys":{"type":1,"id":8926,"country":"RU","sunrise":1572499002,"sunset":1572530870},"timezone":10800,"id":498817,"name":"Санкт-Перербурге","cod":200}});
    };
    
 
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Нет данных по температуре</div>;
    const weather = weatherData.weather[0];
  
    return (
      <div>
      <div className="w3-container w3-light-green">
      <h2>
      {weather.main} в {weatherData.name}
    
      </h2>
      </div>
        
        <p>Текущая температура: {weatherData.main.temp}°</p>
        <p>Самая высокая темп.: {weatherData.main.temp_max}°</p>
        <p>Самая низкая темп.: {weatherData.main.temp_min}°</p>
        <p>Скорость ветра: {weatherData.wind.speed} м/ч</p>
      </div>
    );


  }
}


class AddNewPlace extends Component {

  constructor(props) {
    super(props);

    this.handlePlaceSubmit = this.handlePlaceSubmit.bind(this);
    
  }
  handlePlaceSubmit(e) {
    e.preventDefault();
    
    if( this.refs.placeZip.value.length > 0) {
      this.props.onPlaceSubmit({ 
        name : this.refs.placeName.value,
        zip  : this.refs.placeZip.value
      });
    }

   
   // сбросим данные
   this.refs.placeName.value = "";
   this.refs.placeZip.value = "";
 
  }
  createPlace(e){
    e.preventDefault();
    
    var place = { 
      name : this.refs.placeName.value,
      zip  : this.refs.placeZip.value
    };
    
    if(typeof place.zip === 'string' && place.zip.length > 0) {
      let places = this.props.places;
      places.push(place);
    
    }
   }

   render()  {
    return(
      <div  >
      <div className="w3-container w3-red">
      <h2>Новый город</h2>
      </div>

      <form className="w3-container "  ref="placeForm">

      
       
        <p>
        <label className="w3-text-teal"> <b>Название: </b></label>
          <input  type="text" id="placeItem" placeholder="пр. Владивосток" ref="placeName"  />
        
        </p>
        <p>
        <label className="w3-text-teal"><b> Почтовый индекс: </b></label>
          <input  type="text" id="placeZip" placeholder="пр. 690000" ref="placeZip"  />
        
        </p>
        <button  className="w3-btn w3-teal" onClick={this.handlePlaceSubmit} >Добавить</button>
     
      
     </form>
     </div>
    )
   }
  };




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activePlace: 0,
      addPlace: 0,
      places: this.props.places
      
    };
    this.handlePlaceSubmit= this.handlePlaceSubmit.bind(this);
  }

  handlePlaceSubmit(place){
    const updatedPlaces = this.state.places.concat(place);
    this.setState(
      {places : updatedPlaces}
    );
  }


  render() {
    const activePlace = this.state.activePlace;
    
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
                addPlace: 0,
              });
            }}
          >
            {place.name}
          </button>
          

        ))}
        
        <button
            className="w3-bar-item w3-button tablink"
            key= "addPlace"
            onClick={() => {
              this.setState({ addPlace: 1});
            }}
          >
            Новый город
        </button>
       </div>
       
        
      {(this.state.addPlace===0) ?
          <ShowWeather 
          className="w3-container"
          key = {activePlace}
          zip={this.state.places[activePlace].zip} /> 
           :           
        <AddNewPlace 
          key = "addPlace"
          onPlaceSubmit={this.handlePlaceSubmit} 
        />     

        }
      
      </div>
      

    );
  }
}

export default App;
