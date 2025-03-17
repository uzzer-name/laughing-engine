import React, { useState, useEffect } from 'react';
import './ColorBlock.css';

const ColorBlock = () => {
  const colors = ['#99ffcc', '#8cf2cc', '#80e6cc', '#73d9cc', '#66cccc'];
  //const colors = ['#211C84', '#4D55CC', '#7A73D1', '#B5A8D5'];
  const [colorIndex, setColorIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(colorIndex);

  const changeColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  useEffect(() => {
    console.log(`Current color is: ${colors[colorIndex]}`);
  }, [colorIndex]);

  return (
    <div className="color-block-container">
      <div className="color-block" style={{ backgroundColor: colors[colorIndex] }} />
      <button
        className="color-button"
        style={{ backgroundColor: colors[hoverIndex] }}
        onClick={changeColor}
        onMouseEnter={() => setHoverIndex((colorIndex + 1) % colors.length)}
        onMouseLeave={() => setHoverIndex(colorIndex)}
      >
        Change Color
      </button>
    </div>
  );
};

export default ColorBlock;