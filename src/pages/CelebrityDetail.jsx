import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../components/Tv';
import axios from 'axios';

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
  const { id } = useParams();
  const { state } = useLocation();
  const [translatedOverview, setTranslatedOverview] = useState('');
  const [translatedTitle, setTranslatedTitle] = useState('');

  useEffect(() => {
    if (state.name) {
      translateText(state.name).then(setTranslatedTitle);
    }
    if (state.overview) {
      translateText(state.overview).then(setTranslatedOverview);
    }
  }, [state.name, state.overview]);

  return (
    <div className='page-container'>
      <div style={{ display: 'flex' }}>
        <img
          style={{ width: '350px', height: '550px' }}
          src={IMG_BASE_URL + state.poster_path}
          alt='TV 프로그램 포스터 이미지'
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '18px',
            width: '550px',
          }}
        >
          <div>
            <div style={{ fontSize: '42px', margin: '8px' }}>
              {translatedTitle}
            </div>
            <p>{translatedOverview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
