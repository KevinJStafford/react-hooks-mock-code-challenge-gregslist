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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
