import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

const Star = props => {
  return (
    <div>
      <StarRatingComponent
        name="rate2"
        editing={false}
        renderStarIcon={() => (
          <span>
            <h2>★</h2>
          </span>
        )}
        starCount={5}
        value={props.stars}
      />
    </div>
  );
};

export default Star;
