import React from 'react';
import Dice from './Dice.js';
import './App.css';
import {nanoid} from "nanoid"

function App() {
  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice()  {
    const newDice = []
    for (let i = 0; i<10; i++) {
      newDice.push({
        value:Math.ceil(Math.random()*6),
        isHeld: false,
        id: nanoid()
      })
    }
    return newDice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  function holdDice (id) {
    setDice(oldDice => oldDice.map(dice => {
      return dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
    }))

  }

  

  const diceElements = dice.map(dice => <Dice key={dice.id} value={dice.value} isHeld={dice.isHeld} holdDice={() => holdDice(dice.id)}/>)




  return (
    <main>
      <div className='dice-container'>
        {diceElements}
      
        
      </div>
      <button className='roll-dice' onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
