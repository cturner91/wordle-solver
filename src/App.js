import React, { useContext } from 'react'
import CellRow from './components/CellRow'
import WordList from './components/WordList'
import { defaultContext, GlobalContext, words } from './components/data'


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

const buttonStyle = {
  margin: 'auto',
  marginBottom: 40,
  marginTop: 40,
  padding: 10,
  fontSize: 20,
  borderRadius: 5,
}

function App() {

  const {state, dispatch} = useContext(GlobalContext)  

  const updateCell = (column, row, key, value) => {
    dispatch({row, column, key, value})
  }

  // work out which words are viable, based on the cells
  let words_filtered = words
  for (let i=0; i<state.data.length; i++) {
    for (let j=0; j<state.data[0].length; j++) {

      let color  = state.data[i][j]['color']
      let letter = state.data[i][j]['letter'].toLowerCase()

      // if no letter, then do not filter
      if (!letter) { continue }

      if (color==='blank') { // do nothing 
      } else if (color==='grey') {
        // this letter is not in word
        words_filtered = words_filtered.filter( d=> d.indexOf(letter) < 0)

      } else if (color==='green') {
        // this letter is in word in this exact position
        words_filtered = words_filtered.filter( d=> d.indexOf(letter) === j)

      } else if (color==='amber') {
        // this letter is in word somewhere
        words_filtered = words_filtered.filter( d=> d.indexOf(letter) >= 0 && d.indexOf(letter) !== j)
      }

    }
  }

  const reset_data = () => {
    dispatch({type: 'RESET_DATA', defaultContext: defaultContext})
  }


  return (
    <div style={appStyle}>

      <p style={helpStyle}>
        Enter chosen letters into the circles. Tap the circles to get the colour reported from Wordle. The dropdown below the grid will update with the possible words.
      </p>

      <div style={gridStyle}>
        {state.data.map( (d,i)=><CellRow key={i} values={d} setValues={updateCell} row={i} />)}
      </div>
      <WordList words={words_filtered} />
      <button style={buttonStyle} onClick={reset_data}>
        Reset
      </button>
    </div>
  );
}

export default App;
