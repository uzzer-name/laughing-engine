import React, { useState, useEffect } from 'react';
import './ColorBlock.css';

const ColorBlock = () => {
  const colors = ['#99ffcc', '#8cf2cc', '#80e6cc', '#73d9cc', '#66cccc'];
  //const colors = ['#211C84', '#4D55CC', '#7A73D1', '#B5A8D5'];
  const [colorIndex, setColorIndex] = useState(0);
  const [baseColorIndex, setBaseColorIndex] = useState(0);

  const changeColor = () => {
    const newIndex = (baseColorIndex + 1) % colors.length;
    setBaseColorIndex(newIndex);
    setColorIndex(newIndex);
  };

  useEffect(() => {
  }, [baseColorIndex]);

  return (
    <div className="color-block-container">
      <div className="color-block" style={{ backgroundColor: colors[baseColorIndex] }} />
      <button
        className="color-button"
        style={{ backgroundColor: colors[colorIndex] }}
        onClick={changeColor}
        onMouseEnter={() => setColorIndex((baseColorIndex + 1) % colors.length)}
        onMouseLeave={() => setColorIndex(baseColorIndex)}
        onMouseDown={() => {
          const newIndex = (baseColorIndex + 1) % colors.length;
          setBaseColorIndex(newIndex);
          setColorIndex(newIndex);
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default ColorBlock;