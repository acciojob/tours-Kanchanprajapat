import React, { useState } from 'react';

const Tour = ({ tour, onDelete }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="tour">
      <h2>{tour.name}</h2>
      <img src={tour.image} alt={tour.name} />
      <p>
        {showMore ? tour.info : `${tour.info.substring(0, 200)}...`}
        <button id='see-more-rec6d6T3q5EBIdCfD' onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show less' : 'See more'}
        </button>
      </p>
      <p id='tour-item-para-rec6d6T3q5EBIdCfD' className="price">${tour.price}</p>
      <button id='delete-btn-rec6d6T3q5EBIdCfD' onClick={() => onDelete(tour.id)}>Delete</button>
    </div>
  );
};

export default Tour;