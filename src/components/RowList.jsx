import React from "react";
import Row from "./Row";
// import Row2 from './Row2';
import query from "../apis/query";

function RowList() {
  return (
    <>
      <Row title="Trending Now" fetchUrl={query.fetchTrending} />
      <Row title="Top Rated" fetchUrl={query.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={query.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={query.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={query.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={query.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={query.fetchDocumentaries} />

      {/* <div>
        <Row2 title="Trending Now" fetchUrl={query.fetchTrending} />
        <Row2 title="Top Rated" fetchUrl={query.fetchTopRated} />
        <Row2 title="Action Movies" fetchUrl={query.fetchActionMovies} />
      </div> */}
    </>
  );
}

export default RowList;
