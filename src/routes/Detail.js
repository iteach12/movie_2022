import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DetailMovie from '../components/DetailMovie';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    console.log(json);

    setMovie(json.data.movie);
    setLoading(false);
  };
  // const getMovie = async () => {
  //   const json = await (
  //     await fetch()
  //   ).json();
  //   console.log(json);
  //   setMovie(json);
  //   console.log(movie);
  //   setLoading(false);
  // };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <DetailMovie
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        />
      )}
    </div>
  );
}

export default Detail;
