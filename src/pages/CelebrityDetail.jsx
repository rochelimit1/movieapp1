import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = 'd26d1a3502f681b017183d78064b2389'; // 여기에 실제 TMDB API 키 입력
const IMG_BASE_URL = 'http://image.tmdb.org/t/p/w1280/';

async function getCelebrityDetails(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error during fetch celebrity details:', error);
    return null;
  }
}

async function translateText(text) {
  try {
    const response = await axios.post('https://libretranslate.de/translate', {
      q: text,
      source: 'en',
      target: 'ko',
    });

    return response.data.translatedText;
  } catch (error) {
    console.error('Error during translation:', error);
    return text;
  }
}

export default function CelebrityDetail() {
  const [celebrityData, setCelebrityData] = useState(null);
  const [translatedName, setTranslatedName] = useState('');
  const [translatedBiography, setTranslatedBiography] = useState('');

  const { id } = useParams();

  useEffect(() => {
    // Fetch the details for that person
    getCelebrityDetails(id).then((detailedPerson) => {
      // Set the state with those details
      setCelebrityData(detailedPerson);

      if (detailedPerson.name)
        translateText(detailedPerson.name).then(setTranslatedName);

      if (detailedPerson.biography)
        translateText(detailedPerson.biography).then(setTranslatedBiography);
    });
  }, [id]);

  if (!celebrityData) return <div>Loading...</div>;

  return (
    <div className='page-container'>
      <div style={{ display: 'flex' }}>
        <img
          style={{ width: '350px', height: '550px' }}
          src={IMG_BASE_URL + celebrityData.profile_path}
          alt={celebrityData.name}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '18px',
            width: '550px',
          }}
        >
          <h1>{translatedName}</h1>
          <p>
            <strong>Biography:</strong> {translatedBiography}
          </p>
        </div>
      </div>
    </div>
  );
}
