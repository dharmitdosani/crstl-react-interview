import { useState } from "react";
import { WordRow } from "./components/wordRow";
import "./App.css";

const CorrectAns = ["r", "e", "a", "c", "t"];

function App() {
  const [attempts, setAttempts] = useState([
    new Array(5).fill({
      letter: "",
      color: "white",
    }),
  ]);

  const [currentAttempt, setCurrentAttempt] = useState(0);

  const checkGuess = () => {
    const temp = JSON.parse(JSON.stringify(attempts));

    let correctCount = 0;

    attempts[currentAttempt].forEach(({ letter }, index) => {
      if (letter === CorrectAns[index]) {
        temp[currentAttempt][index].color = "green";
        correctCount++;
        console.log(letter, "green");
      } else if (CorrectAns.includes(letter)) {
        temp[currentAttempt][index].color = "yellow";
        console.log(letter, "yellow");
      } else {
        temp[currentAttempt][index].color = "grey";
        console.log(letter, "grey");
      }
    });

    if (correctCount < 5 && currentAttempt < 6) {
      setAttempts([
        ...temp,
        new Array(5).fill({
          letter: "",
          color: "white",
        }),
      ]);

      setCurrentAttempt((old) => old + 1);
    } else {
      setAttempts(temp);
    }
  };

  const setLetters = (val, index) => {
    console.log("temp", val);
    const temp = JSON.parse(JSON.stringify(attempts));
    temp[currentAttempt][index].letter = val;

    setAttempts(temp);
  };

  return (
    <div className="App">
      {attempts.map((attempt, index) => (
        <WordRow
          checkGuess={checkGuess}
          letters={attempt}
          setLetters={setLetters}
          isEnabled={currentAttempt === index}
        />
      ))}
    </div>
  );
}

export default App;

// 5 inputs - 1 guess
// 6 such rows - so an array for guesses

// 3 different colors for the guesses - gray, green, yellow
// word can have same letter repeated
