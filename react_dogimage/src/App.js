import React, { useState, useEffect } from 'react';
import DogImage from './components/DogImage';

function App() {
  const [imageUrl, setImageUrl] = useState('');

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



  return (
    <div>
      <DogImage imageUrl={imageUrl} onRefresh={handleRefresh} />
    </div>
  );
}

export default App;
