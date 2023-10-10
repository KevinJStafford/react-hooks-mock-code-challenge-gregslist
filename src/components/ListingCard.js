import React, {useState} from "react";

function ListingCard({ listing, removeListing }) {
  const [isLiked, setIsLiked] = useState(false)
  const {id, description, image, location} = listing

  const onIsLikedChanged = () => {
    setIsLiked(!isLiked)
  }

  function handleLikeClick() {
    onIsLikedChanged()
  }

  const handleDelete = () => {
    removeListing( id )
    fetch( 'http://localhost:6001/listings/' + id, { method: 'DELETE' } )
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
        <button onClick={handleDelete} className="emoji-button delete" id={id}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
