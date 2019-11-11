import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

const PLACES = [
    { name: "Ижевск", zip: "426000" },
    { name: "Москва", zip: "101000" },
    { name: "Санкт-Петербург", zip: "190000" },
    ];


    ReactDOM.render(<App  places={PLACES} />, document.getElementById('root'));



//serviceWorker.unregister();
