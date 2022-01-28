import React, { useState } from 'react'
import CellRow from './components/CellRow'
import WordList from './components/WordList'
import words from './components/data'


const appStyle = {
  width: '100%',
  backgroundColor: 'lightgrey',
  minHeight: '100vh',
  minWidth: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const gridStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 10,
  paddingLeft: 20,
  paddingRight: 20,
}

const helpStyle = {
  paddingLeft: 40,
  paddingRight: 40,
  paddingTop: 20,
  textAlign: 'center',
}


function App() {

  const [cells, setCells] = useState([
    [{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''}],
    [{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''}],
    [{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''}],
    [{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''}],
    [{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''}],
    [{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''},{color: '', letter: ''}],
  ])

  const words = ['I','like','turtles']

  return (
    <div style={appStyle}>

      <p style={helpStyle}>
        Enter chosen letters into the circles. Tap the circles to get the colour reported from Wordle. The dropdown below the grid will update with the possible words.
      </p>

      <div style={gridStyle}>
        {cells.map( (d,i)=><CellRow key={i} values={d} />)}
      </div>
      <WordList words={words} />
    </div>
  );
}

export default App;
