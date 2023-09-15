import React from 'react';
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = 'http://image.tmdb.org/t/p/w1280/';

export default function Tv(props) {
  const navigate = useNavigate();

  const onClickTvItem = () => {
    navigate(`/tv/${props.id}`, {
      state: props,
    });
  };

  return (
    <div className='tv-container' onClick={onClickTvItem}>
      <img src={IMG_BASE_URL + props.poster_path} alt='티비포스터' />
      <div className='tv-info'>
        <h4>{props.name}</h4>
        <span>{props.vote_average}</span>
      </div>
    </div>
  );
}
