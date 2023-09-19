import React, { useEffect, useState } from 'react';
import Celebrity from '../components/Celebrity';

export default function Celebrities() {
  const [CelebrityList, setCelebrityList] = useState([]);

  const getCelebrities = () => {
    fetch(
      'https://api.themoviedb.org/3/person/popular?api_key=d26d1a3502f681b017183d78064b2389'
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results);
        setCelebrityList(json.results);
      });
  };

  useEffect(() => {
    getCelebrities();
  }, []);

  return (
    <div className='celebrities-container'>
      {CelebrityList.map((celebrity) => (
        <Celebrity key={celebrity.id} {...celebrity} />
      ))}
    </div>
  );
}
