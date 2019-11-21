import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setZip,
  setCity
} from './../actions/Actions';
import { Link } from 'react-router-dom'

let AddNewPlace = ({dispatch}) => {
  let input1,input2;
  return (
      <div className="w3-card w3-margin w3-display-topmiddle">
        <div className="w3-container w3-red">
          <h2>Новый город</h2>
        </div>
        <form className="w3-container " onSubmit={e => {
        e.preventDefault()
        if (!input1.value.trim()) {
          return
        }
        dispatch(setCity(input1.value))
        dispatch(setZip(input2.value))
        input1.value = ''
        input2.value = ''
      }}>
          <p>
            <label className="w3-text-teal"> <b>Название: </b></label> 
            <input ref={node => {
          input1 = node
        }}
              type="text" 
              placeholder="пр. Владивосток"  
            ></input>
          </p>
          <p>
            <label className="w3-text-teal"><b> Почтовый индекс: </b></label>
            <input ref={node => {
          input2 = node
        }}
                type="text" 
                placeholder="пр. 690000" 
             ></input>
          </p>
         <input type="submit" value="Submit" />

        </form>
        <div>
          <p>
        <Link to="/" >Вернутся назад</Link>
        </p>
      </div>
      </div>
 )
}

export default AddNewPlace = connect()(AddNewPlace)