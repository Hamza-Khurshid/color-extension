import './App.css';
import { PhotoshopPicker  } from 'react-color'
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("#FFFFFF");

  const handleChange = (color) => {
    setColor(color.hex)
    navigator.clipboard.writeText(color.hex)
  };

  const copyColor = () => {
    navigator.clipboard.writeText(color)
  }

  return (
    <div className="App">
      <PhotoshopPicker  
        color={color}
        header="Hamza Picks"
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
