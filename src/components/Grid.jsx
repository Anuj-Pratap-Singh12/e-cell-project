import { useState } from 'react';

const GridApp = () => {
  const initialColors = Array(9).fill('blue');
  const [colors, setColors] = useState(initialColors);
  const [clickSequence, setClickSequence] = useState([]);

  const handleClick = (index) => {
    if (index === 8) {
      const newColors = [...colors];
      clickSequence.forEach((idx) => {
        newColors[idx] = 'blue';
      });
      newColors[8] = 'red';
      setColors(newColors);
      setClickSequence([]);
    } else {
      const newColors = [...colors];
      newColors[index] = colors[index] === 'blue' ? 'red' : 'blue';
      setColors(newColors);
      if (colors[index] === 'blue') {
        setClickSequence([...clickSequence, index]);
      }
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2 bg-gray-300 shadow-md rounded-lg p-4 h-full">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`h-30 w-30 rounded-lg cursor-pointer transition-all ${
            color === 'blue' ? 'bg-blue-700' : 'bg-red-700'
          }`}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default GridApp;
