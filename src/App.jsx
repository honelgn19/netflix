import React from "react";

import "@fontsource/inter";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Row from "./components/Row";
import query from "./apis/query";

function App() {
  return (
    <>
      <Header />
      <div>
        <Row title="Trending Now" fetchUrl={query.fetchTrending} />
        <Row title="Top Rated" fetchUrl={query.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={query.fetchActionMovies} />
      </div>
      <Footer />
    </>
  );
}

export default App;
