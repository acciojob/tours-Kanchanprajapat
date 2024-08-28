import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const [showMore, setShowMore] = useState(false);
  const { id, name, info, image, price } = tour;

  // Truncate the text to 200 words or 250 characters, whichever is shorter
  const truncatedText = info.length > 200 ? info.slice(0, 200) + '...' : info;

  // Determine which text to show based on showMore state
  const textToShow = showMore ? info : truncatedText;

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
