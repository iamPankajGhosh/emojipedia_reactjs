import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [emojis, setEmojis] = useState([]);
  const [meaning, setMeaning] = useState("");

  useEffect(() => {
    fetch(
      "https://emoji-api.com/emojis?access_key=761331fecf913b6929994825a483e913f1fbc898"
    )
      .then((res) => res.json())
      .then((data) => setEmojis(data));
  });

  return (
    <>
      <div className="container">
        <h1>Emojipedia</h1>

        <div className="wrapper">
          <input type="text" className="text-field" value={meaning} />

          <div className="btn">
            {emojis.map((emoji, index) => {
              if (index < 24)
                return (
                  <button
                    key={index}
                    onClick={() => {
                      let meaning = emoji["unicodeName"].replace("E0.6", "");
                      setMeaning(meaning);
                    }}
                  >
                    {emoji["character"]}
                  </button>
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
