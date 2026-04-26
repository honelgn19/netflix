import React, { useEffect, useState } from "react";
import axios from "../apis/axios";
import query from "../apis/query";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(query.fetchTrending);

      // pick random movie
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ];

      setMovie(randomMovie);
    }

    fetchData();
  }, []);

  return (
    <header
      className="h-[60vh] md:h-[80vh] text-white relative flex items-end"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/* CONTENT */}
      <div className="ml-6 md:ml-12 mb-20 max-w-xl">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          {movie?.title || movie?.name}
        </h1>

        <div className="flex gap-3 mb-4">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300">
            ▶ Play
          </button>

          <button className="bg-gray-600/70 px-6 py-2 rounded hover:bg-gray-500">
            + My List
          </button>
        </div>

        <p className="text-sm md:text-base line-clamp-3">{movie?.overview}</p>
      </div>

      {/* GRADIENT OVERLAY */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
    </header>
  );
}

export default Banner;
