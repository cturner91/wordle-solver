import React, { useContext } from 'react'
import Cell from './Cell'
import { GlobalContext } from './data'


const rowStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
}


const CellRow = (props) => {

  const {state} = useContext(GlobalContext)

  return (
    <div style={rowStyle}>
      {props.values.map( (d,i)=><Cell key={i} value={d} setValue={props.setValues} 
        row={props.row} 
        column={i} 
        shouldFocus={state.currentRow===props.row && state.currentColumn===i} 
      />)}
    </div>
  )
}

export default CellRow