import { useState } from "react";

function App() {
  const [meaning, setMeaning] = useState("");

  const emojiDictionary = {
    "🙈": "See-No-Evil Monkey",
    "🙉": "Hear-No-Evil Monkey",
    "🙊": "Speak-No-Evil Monkey",
    "💥": "Collision",
    "💫": "Dizzy",
    "💦": "Sweat Droplets",
    "💨": "Dashing Away",
    "🐵": "Monkey Face",
    "🐒": "Monkey",
    "🦍": "Gorilla",
    "🦧": "Orangutan",
    "🐶": "Dog Face",
    "🐕": "Dog",
    "🌹": "Rose",
    "🥀": "Wilted Flower",
    "🌺": "Hibiscus",
    "🌻": "Sunflower",
    "🌼": "Blossom",
    "🌷": "Tulip",
    "🌱": "Seedling",
    "🌲": "Evergreen Tree",
    "🌳": "Deciduous Tree",
    "🌴": "Palm Tree",
    "🌵": "Cactus",
    "🌾": "Sheaf of Rice",
    "🌿": "Herb",
    "☘️": "Shamrock",
    "🍀": "Four Leaf Clover",
    "": "",
  };

  const emojis = Object.keys(emojiDictionary);

  const handleInputChange = (event) => {
    let inputText = event.target.value;
    let meaning = emojiDictionary[inputText];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  };

  const handleEmojiClick = (emoji) => {
    let emojiMeaning = emojiDictionary[emoji];
    setMeaning(emojiMeaning);
  };

  return (
    <>
      <h1>Animals and Nature</h1>
      <input type="text" onChange={handleInputChange} />
      <h2>Meaning: {meaning}</h2>
      <h3>Emoji pad</h3>
      {emojis.map((emoji, index) => (
        <span
          key={index}
          onClick={() => {
            handleEmojiClick(emoji);
          }}
        >
          {emoji}
        </span>
      ))}
    </>
  );
}

export default App;
