import React from 'react'

const wordListStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    maxWidth: 200, 
    width: '100%', 
    margin: 'auto', 
    marginTop: 30
}


const WordList = (props) => {
  return (
    <div style={wordListStyle}>
      <p>Possible Words</p>
      <select style={{width: '100%', maxWidth: '100%', textAlign: 'center', fontsize: 30, height: 30, margin: 'auto'}}>
        {props.words.map( (d,i)=><option key={i}>{d}</option>)}
      </select>
    </div>
  )
}

export default WordList
