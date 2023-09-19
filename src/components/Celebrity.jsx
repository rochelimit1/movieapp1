import React from 'react';
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = 'http://image.tmdb.org/t/p/w1280/';

export default function Celebrity(props) {
  const navigate = useNavigate();

  const onClickCelebrityItem = () => {
    navigate(`/celebrity/${props.id}`, {
      state: props,
    });
  };

  return (
    <div className='celebrity-container' onClick={onClickCelebrityItem}>
      <img src={IMG_BASE_URL + props.profile_path} alt='프로필사진' />
      <div className='celebrity-info'>
        <h4>{props.name}</h4>
        <span>{props.popularity}</span>
      </div>
    </div>
  );
}
