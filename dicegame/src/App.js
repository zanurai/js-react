
import { useState } from "react";
import "./index.css";

const App = () => {
  const [diceNumber, setDiceNumber] = useState(3);
  const [diceNumber2, setDiceNumber2] = useState(6);
  const refreshDice = () => {
    const ranno = Math.floor(Math.random() * 6) + 1
    setDiceNumber(ranno);
    const ranno2 = Math.floor(Math.random() * 6) + 1
    setDiceNumber2(ranno2);
  }

  return (
    <div >
      <center>
        <img width={300} height={300} src={require(`./dicc4/${diceNumber}.png`)}></img>
        <img width={300} height={300} src={require(`./dicc4/${diceNumber2}.png`)}></img>
        <br />
        <button onClick={() => refreshDice()} className="button">Roll</button>
      </center>
    </div>
  );
}

export default App;
