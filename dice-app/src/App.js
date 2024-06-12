import React from 'react';
import Dice from './Dice.js';
import './App.css';
import {nanoid} from "nanoid"

function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)


  React.useEffect(()=> {
    const allHeld = dice.every(dice => dice.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(dice => dice.value=== firstValue)
    if (allHeld && allSameValue){
      setTenzies(true)
      console.log("You won")
    }
    
  }, [dice])

  function allNewDice()  {
    const newDice = []
    for (let i = 0; i<10; i++) {
      newDice.push(generateNewDice())
    }
    return newDice
  }

  function generateNewDice() {
    return {
        value:Math.ceil(Math.random()*6),
        isHeld: false,
        id: nanoid()
    }
  }





  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? 
      die : generateNewDice()
    } ))
  }

  function holdDice (id) {
    setDice(oldDice => oldDice.map(dice => {
      return dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
    }))

  }

  

  const diceElements = dice.map(dice => <Dice key={dice.id} value={dice.value} isHeld={dice.isHeld} holdDice={() => holdDice(dice.id)}/>)




  return (
    <main>
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze 
        it at its current value between rolls
      </p>
      <div className='dice-container'>
        {diceElements}
      
        
      </div>
      <button className='roll-dice' onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
