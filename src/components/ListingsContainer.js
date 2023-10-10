import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
 
  const renderListings = listings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} />
  })
  return (
    <main>
      <ul className="cards">{renderListings}</ul>
    </main>
  );
}

export default ListingsContainer;
