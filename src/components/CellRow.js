import React, { useState } from 'react'
import Cell from './Cell'


const rowStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
}


const CellRow = (props) => {
  return (
    <div style={rowStyle}>
      {props.values.map( (d,i)=><Cell key={i} value={d} />)}
    </div>
  )
}

export default CellRow