import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  const getListings = () => {
  fetch("http://localhost:6001/listings")
  .then(r => r.json())
  .then((listingData) => setListings(listingData))
  }
  
  useEffect(getListings, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings}/>
    </div>
  );
}

export default App;
