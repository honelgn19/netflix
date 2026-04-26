import React from "react";

import "@fontsource/inter";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner";
// import Row from "./components/Row";
import RowList from "./components/RowList";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
}

export default App;
