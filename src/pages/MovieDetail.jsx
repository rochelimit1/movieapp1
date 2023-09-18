import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../components/Movie';

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <div className='page-container'>
      <div
        style={{
          display: 'flex',
        }}
      >
        <img
          style={{ width: '350px', height: '550px' }}
          src={IMG_BASE_URL + state.poster_path}
          alt='영화 포스터 이미지'
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '18px',
            width: ' 550px',
          }}
        >
          <div>
            <div style={{ fontSize: '42px', margin: '8px' }}>{title}</div>
          </div>
          <p>{state.overview}</p>
        </div>
      </div>
    </div>
  );
}
