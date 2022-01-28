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
  console.log(color)

  const changeColor = () => {
    if (color==='blank') setColor('black') 
    else if (color==='black') setColor('amber') 
    else if (color==='amber') setColor('green') 
    else if (color==='green') setColor('blank')
    else setColor('black')
  }
  
  return (
    <div style={cellStyle} onClick={changeColor}>
      <input type='text' value={letter} 
        onChange={(e)=>setLetter(e.target.value.toUpperCase().slice(-1))} 
        style={{...inputStyle, backgroundColor: colors[color]}} 
      />
    </div>
  )
}

export default Cell