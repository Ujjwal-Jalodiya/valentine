import { useState } from "react";

const messages = [
  "No",
  "Are you sure? kutkut",
  "Really sure?? baby",
  "Are you positive? cutie",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️",
];

const ValentineCard = ({ setAccepted }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [yesSize, setYesSize] = useState(1.5);

  const handleNoClick = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    setYesSize((prevSize) => prevSize * 1.5);
  };

  return (
    <div className="container">
      <h1>Will you be my Valentine? Sheefa Ahmed</h1>
      <div className="buttons">
        <button
          className="yes-button"
          style={{ fontSize: `${yesSize}em` }}
          onClick={() => setAccepted(true)}
        >
          Yes
        </button>
        <button className="no-button" onClick={handleNoClick}>
          {messages[messageIndex]}
        </button>
      </div>
      <div className="gif_container">
        <img
          src="https://media1.giphy.com/media/VM1fcpu2bKs1e2Kdbj/giphy.gif"
          alt="Cute GIF"
        />
      </div>
    </div>
  );
};

export default ValentineCard;
