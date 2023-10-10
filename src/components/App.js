import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  const getListings = () => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(setListings)
  }

  const removeListing = doomedID => {
    const newListings = listings.filter(lObj => lObj.id !== doomedID)

    setListings(newListings)
  }
  
  useEffect(getListings, [])
  

  const [search, setSearch] = useState('')

  const updateSearch = newValue => setSearch(newValue.toLowerCase())

  const filteredListings = listings.filter(lObj => {
    if(lObj.description.includes(search.toLowerCase())) {
      return true
    } else {
      return false
    }
  })

  return (
    <div className="app">
      <Header updateSearch={updateSearch}/>
      <ListingsContainer listings={filteredListings} removeListing={removeListing}/>
    </div>
  );
}

export default App;
