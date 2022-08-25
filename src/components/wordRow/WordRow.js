const alphabets = "qwertyuiopasdfghjklzxcvbnm".split("");

export const WordRow = ({ checkGuess, letters, setLetters, isEnabled }) => {
  const updateLetter = (newLetter, index) => {
    if (!alphabets.includes(newLetter)) {
      return;
    }

    setLetters(newLetter, index);

    // move current index to next one if letter
    // move to prev if backspace
  };

  const handleSubmit = () => {
    if (letters.map(({ letter }) => letter).includes("")) {
      window.alert("fill all letters");
      return;
    }

    checkGuess();
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {letters.map(({ letter, color }, index) => (
        <input
          type="text"
          value={letter}
          onChange={(e) => updateLetter(e.target.value, index)}
          style={{
            backgroundColor: color,
            width: 50,
            height: 50,
            margin: 20,
            textAlign: "center",
            fontSize: 25,
          }}
          disabled={!isEnabled}
        />
      ))}
      <button onClick={isEnabled && handleSubmit}>submit</button>
    </div>
  );
};
