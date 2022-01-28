import React, { useState, useContext } from 'react'
import { GlobalContext, util_get_next_input } from './data'


const inputStyle = {
  // border: 'none',
  width: 50,
  height: 50,
  borderRadius: '50%',
  textAlign: 'center',
  fontSize: 30,
  padding: 1,
  borderWidth: 2,
  borderColor: 'black',
}


const cellStyle = {
  // borderRadius: '50%',
  borderWidth: 2,
  borderColor: 'black',
  width: 50,
  height: 50,
  margin: 10,
}

const colors = {
  blank: 'white',
  grey: 'grey',
  amber: 'darkorange',
  green: 'forestgreen',
}

const Cell = (props) => {

  const {state, dispatch} = useContext(GlobalContext)

  const [color, setColor] = useState('blank')
  const [letter, setLetter] = useState('')


  const changeColor = () => {
    let new_color = ''
    if (color==='blank') new_color = 'grey'
    else if (color==='grey') new_color = 'amber' 
    else if (color==='amber') new_color = 'green' 
    else if (color==='green') new_color = 'blank'
    else new_color = 'blank'

    setColor(new_color)
    dispatch({type: 'UPDATE_CELL', column: props.column, row: props.row, key: 'color', value: new_color})
  }

  const updateLetter = (e) => {
    let wletter = e.target.value.toUpperCase().slice(-1)
    setLetter(wletter)
    dispatch({type: 'UPDATE_CELL', column: props.column, row: props.row, key: 'letter', value: wletter})

    const [next_row, next_column] = util_get_next_input(props.row, props.column, state.data[0].length)
    const nextInput = document.querySelector(`input[name='${next_row}${next_column}']`)
    nextInput.focus()
  }

  
  return (
    <div style={cellStyle} onClick={changeColor}>
      <input type='text' value={letter} 
        name={String(props.row)+String(props.column)}
        onChange={updateLetter} 
        style={{...inputStyle, backgroundColor: colors[color]}} 
      />
      {/* <span>{props.shouldFocus ? 'H' : ''}</span> */}
    </div>
  )
}

export default Cell