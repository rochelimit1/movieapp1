import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// 가정: getMoviesByKeyword 함수가 백엔드 API를 호출하여 검색 결과를 가져옵니다.
// import { getMoviesByKeyword } from './api';

export default function SearchPage() {
  const { keyword } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // TODO: 실제 API 호출 로직으로 교체해야 합니다.
    // getMoviesByKeyword(keyword).then(setMovies);

    // 가짜 데이터로 처리
    setMovies([{ title: '예시 영화1' }, { title: '예시 영화2' }]);
  }, [keyword]);

  return (
    <div>
      <h1>검색 결과:</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
