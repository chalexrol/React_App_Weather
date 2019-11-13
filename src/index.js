import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const PLACES = [
  { city: 'Ижевск', zip: '426000' },
  { city: 'Москва', zip: '101000' },
  { city: 'Санкт-Петербург', zip: '190000' }
]

ReactDOM.render(<App places={PLACES} />, document.getElementById('root'))
