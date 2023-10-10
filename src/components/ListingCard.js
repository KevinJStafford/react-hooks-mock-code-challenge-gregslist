import React, {useState} from "react";

function ListingCard({ listing }) {
  const [isLiked, setIsLiked] = useState(false)
  const {description, image, location} = listing

  function onIsLikedChanged() {
    setIsLiked((currentState) => !currentState)
  }
  function handleLikeClick() {

    onIsLikedChanged()
  }

  function handleDelete(e) {
    console.log(e.target.id)
    const deletedListing = e.target.id
    return (
    fetch( `http://localhost:6001/listings/${deletedListing}`), {
    method: "DELETE"}
    )
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick= {handleLikeClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLikeClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete" id={listing.id}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
