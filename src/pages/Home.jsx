import React from 'react';

export default function Home() {
  const imageUrl =
    'https://www.themoviedb.org/t/p/w880_and_h600_multi_faces_filter(duotone,00192f,00baff)/hoVj2lYW3i7oMd1o7bPQRZd1lk1.jpg';

  return (
    <div
      className='page-container'
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: '100% 100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff', // white color for the text
      }}
    >
      <h2>Welcome to My Movie App</h2>
    </div>
  );
}
