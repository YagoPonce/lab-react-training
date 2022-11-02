import React from 'react'


function Greetings(props) {
  return (
    <div>
        <h3>{props.lang === "de" ? "Hallo" : "Bonjour"} { props.children}</h3>
    <hr/>
    </div>
  )
}

export default Greetings