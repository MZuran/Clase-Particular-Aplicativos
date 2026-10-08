import React from 'react'

function Mensaje({ username, mensaje }) {
  return (
    <div>
      <p> <b>{username}</b> : {mensaje} </p>
    </div>
  )
}

export default Mensaje
