import React from 'react'

const wordListStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    maxWidth: 200, 
    width: '100%', 
    margin: 'auto', 
    marginTop: 10,
}


const inputStyle = {
  width: '100%', 
  maxWidth: '100%', 
  textAlign: 'center', 
  fontsize: 30, 
  height: 30, 
  margin: 'auto',
  backgroundColor: 'white',
  borderWidth: 2,
  borderColor: 'black',
  borderRadius: 10,
  paddingLeft: 20,
}

const WordList = (props) => {
  return (
    <div style={wordListStyle}>
      <p style={{marginBottom: 10}}>{props.words.length === 1 ? '1 Possible Word' : props.words.length+' Possible Words'}</p>
      <select style={inputStyle}>
        {props.words.map( (d,i)=><option key={i}>{d.toUpperCase()}</option>)}
      </select>
    </div>
  )
}

export default WordList
