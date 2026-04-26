import React, { useEffect, useState } from "react";
import axios from "../apis/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

const base_img_url = "https://image.tmdb.org/t/p/w300/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  // 🎬 Handle click
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // close trailer
    } else {
      movieTrailer(movie?.title || movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  // 🎥 YouTube options
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="text-white px-6">
      <h2 className="text-xl mb-4">{title}</h2>

      {/* Posters */}
      <div className="flex overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="w-40 mr-3 cursor-pointer hover:scale-110 transition"
            src={`${base_img_url}${movie.poster_path}`}
            alt={movie.title}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>

      {/* 🎬 Trailer */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
