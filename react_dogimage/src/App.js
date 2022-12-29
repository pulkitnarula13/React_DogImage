import React, { useState, useEffect } from 'react';
import DogImage from './components/DogImage';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [intervalId, setIntervalId] = useState(null);


  async function fetchImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    setImageUrl(data.message);
  }
  useEffect(() => {
    fetchImage();
  }, []);

  const handleRefresh = () => {
    fetchImage();
  };

  function startTimer() {
    const id = setInterval(fetchImage, 3000);
    setIntervalId(id);
  }

  function stopTimer() {
    clearInterval(intervalId);
    setIntervalId(null);
  }



  return (
    <div>
      <DogImage imageUrl={imageUrl} onRefresh={handleRefresh} />
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default App;
