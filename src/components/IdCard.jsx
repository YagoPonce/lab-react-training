import React from 'react'
// function IdCard({firstName, lastName, gender, height, birth, picture }) {
    function IdCard(props) {
  return (
    <div>
        <div>
        <img src={props.picture} />
        </div>
        <div>
            <h3>First name: {props.firstName}</h3>
            <h3>Last name: {props.lastName}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Height:{props.height.toString()} </h3>
            <h3>Birth: {props.birth.toString()}</h3>
        </div>
      <hr />
    </div>
   
  
  )
}

export default IdCard