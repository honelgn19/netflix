import React from "react";

import "@fontsource/inter";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Row from "./components/Row";
import query from "./apis/query";
import Banner from "./components/Banner";
import Row2 from "./components/Row2";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <div>
        <Row title="Trending Now" fetchUrl={query.fetchTrending} />
        <Row title="Top Rated" fetchUrl={query.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={query.fetchActionMovies} />
      </div>
      <Footer />
      {/* <div>
        <Row2 title="Trending Now" fetchUrl={query.fetchTrending} />
        <Row2 title="Top Rated" fetchUrl={query.fetchTopRated} />
        <Row2 title="Action Movies" fetchUrl={query.fetchActionMovies} />
      </div> */}
    </>
  );
}

export default App;
