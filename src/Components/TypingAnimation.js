import React, { useState, useEffect } from 'react';


const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const words = ['Elevate', 'Your', 'Tech', 'Journey!'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) => prevText + words[index].charAt(prevText.length));
      if (text.length === words[index].length) {
        clearInterval(intervalId);
        setTimeout(() => {
          // Move to the next word after a delay
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
          setText('');
        }, 350);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [index, text]);

  return (
    <div className="typing-animation">

      <style>
        {`.typing-animation {
  position: relative;
  height: 50px; /* Set a fixed height to avoid layout issues */
}

.text {

  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;

  animation: typing 1s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}


`}
      </style>
      <div className=" lg:text-9xl text-6xl tracking-wider mt-12 font-extrabold text-white text">{text}</div>
    </div>
  );
};

export default TypingAnimation;
