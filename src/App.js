import React,{useState} from "react";
import Die from "./components/Die";
import "./App.css";
import {nanoid} from "nanoid"

function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice(){
    const newDice = []
    for(let i=0; i<10; i++){
      newDice.push({
        value: Math.ceil(Math.random()*6),
        isHeld : false,
        id : nanoid()
      })
    }
    return newDice
  }

  function rollDice(){
    setDice(allNewDice())
  }

  const arrayElements = dice.map(die => <Die key={die.id}  value={die.value} />)

    return (
        <main>
          <div className="dice-container">
              {arrayElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    );
}

export default App;
