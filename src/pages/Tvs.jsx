import React, { useEffect, useState } from 'react';
import Tv from '../components/Tv';

export default function Tvs() {
  const [tvList, setTvList] = useState([]);

  const getTvs = () => {
    fetch(
      'https://api.themoviedb.org/3/discover/tv?api_key=d26d1a3502f681b017183d78064b2389'
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results);
        setTvList(json.results);
      });
  };

  useEffect(() => {
    getTvs();
  }, []);

  return (
    <div className='tvs-container'>
      {tvList.map((tv) => (
        <Tv key={tv.id} {...tv} />
      ))}
    </div>
  );
}
