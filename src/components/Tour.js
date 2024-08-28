import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const [showMore, setShowMore] = useState(false);
  const { name, info, image, price } = tour;

  return (
    <div className="tour">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>
        {showMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'See less' : 'Show more'}
        </button>
      </p>
      <p>Price: ${price}</p>
      <button onClick={() => removeTour(tour.id)}>Delete Tour</button>
    </div>
  );
};

export default Tour;
