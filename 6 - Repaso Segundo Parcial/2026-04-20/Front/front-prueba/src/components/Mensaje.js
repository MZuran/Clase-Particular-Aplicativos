import React from 'react'

export function Mensaje({ mensaje, usuario }) {
  return (
    <p>
      <b>{usuario}: </b>{mensaje}
    </p>
  )
}
