import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const [showMore, setShowMore] = useState(false);
  const { id, name, info, image, price } = tour;

  // Function to truncate text to 200 characters
  const truncateText = (text, limit) => {
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  };

  // Determine whether to show truncated or full text
  const textToShow = showMore ? info : truncateText(info, 200);

  return (
    <div className="tour">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p id={`tour-item-para-${id}`}>
        {textToShow}
        <button
          id={`see-more-${id}`}
          onClick={() => setShowMore(!showMore)}
        >
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
