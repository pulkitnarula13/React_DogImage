import React from 'react';

function DogImage({ imageUrl, onRefresh }) {
    return (
        <div>
        <img width="400px" height="auto" src={imageUrl} alt="Random dog" />
        <button onClick={onRefresh}>Refresh</button>
        </div>
    );
}

export default DogImage;
