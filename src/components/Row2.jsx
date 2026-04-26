import React, { useEffect, useState } from "react";
import axios from "../apis/axios";
import "./Row.css";

const base_img_url = "https://image.tmdb.org/t/p/w500/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <h2>{title}</h2>

      <div style={{ display: "flex", overflowX: "scroll" }}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${base_img_url}${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "200px", marginRight: "10px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
