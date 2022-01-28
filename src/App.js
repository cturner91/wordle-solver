import React, { useState } from 'react'
import CellRow from './components/CellRow'
import WordList from './components/WordList'
import { words } from './components/data'


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
    [{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''}],
    [{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''}],
    [{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''}],
    [{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''}],
    [{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''}],
    [{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''},{color: 'blank', letter: ''}],
  ])
  

  const updateCell = (column, row, key, value) => {
    let wdata = cells
    wdata[row][column][key] = value
    setCells(wdata)
  }

  // work out which words are viable, based on the cells
  let words_filtered = words
  for (let i=0; i<cells.length; i++) {
    for (let j=0; j<cells[0].length; j++) {

      let color  = cells[i][j]['color']
      let letter = cells[i][j]['letter']

      if (color==='blank') { // do nothing 
      } else if (color==='grey') {
        // this letter is not in word
        words_filtered = words_filtered.filter( d=> d.indexOf(letter) < 0)

      } else if (color==='green') {
        // this letter is in word in this exact position
        words_filtered = words_filtered.filter( d=> d.indexOf(letter) === j)

      } else if (color==='amber') {
        // this letter is in word somewhere
        words_filtered = words_filtered.filter( d=> d.indexOf(letter) >= 0 && d.indexOf(letter) != j)
      }

    }
  }


  return (
    <div style={appStyle}>

      <p style={helpStyle}>
        Enter chosen letters into the circles. Tap the circles to get the colour reported from Wordle. The dropdown below the grid will update with the possible words.
      </p>

      <div style={gridStyle}>
        {cells.map( (d,i)=><CellRow key={i} values={d} setValues={updateCell} row={i} />)}
      </div>
      <WordList words={words_filtered} />
    </div>
  );
}

export default App;
