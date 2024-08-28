import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const [showMore, setShowMore] = useState(false);
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p id={`tour-item-para-${id}`}>
        {showMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'See less' : 'Show more'}
        </button>
      </p>
      <p>Price: ${price}</p>
      <button id={`delete-btn-${id}`} onClick={() => removeTour(id)}>
        Delete Tour
      </button>
    </div>
  );
};

export default Tour;
