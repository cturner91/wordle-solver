import React, { useState } from 'react'


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
  black: 'grey',
  amber: 'darkorange',
  green: 'forestgreen',
}

const Cell = (props) => {

  const [color, setColor] = useState(props.value.color)
  const [letter, setLetter] = useState(props.value.letter)


  const changeColor = () => {
    let new_color = ''
    if (color==='blank') new_color = 'black'
    else if (color==='black') new_color = 'amber' 
    else if (color==='amber') new_color = 'green' 
    else if (color==='green') new_color = 'blank'
    else new_color = 'black'

    setColor(new_color)

    props.setValue(props.column, props.row, 'color', new_color)
  }

  const updateLetter = (e) => {
    let wletter = e.target.value.toUpperCase().slice(-1)
    setLetter(wletter)
    props.setValue(props.column, props.row, 'letter', wletter)
  }
  
  return (
    <div style={cellStyle} onClick={changeColor}>
      <input type='text' value={letter} 
        onChange={updateLetter} 
        style={{...inputStyle, backgroundColor: colors[color]}} 
      />
    </div>
  )
}

export default Cell