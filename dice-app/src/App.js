import React from 'react';
import Dice from './Dice.js';
import './App.css';

function App() {
  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice()  {
    const newDice = []
    for (let i = 0; i<10; i++) {
      newDice.push(Math.ceil(Math.random()*6))
    }
    return newDice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  

  const diceElements = dice.map(dice => <Dice value={dice} />)




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
