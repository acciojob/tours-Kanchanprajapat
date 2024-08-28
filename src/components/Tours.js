import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, setTours }) => {
  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <div className="tours">
      {tours.map(tour => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
};

export default Tours;
