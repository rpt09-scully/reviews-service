import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import styles from '../../client/css/style.css';

const ReviewList = props => {
  console.log('REVIEWLIST', props)
  return (
    <div>
      <div>
        <ul className={`${styles.sort_list} ${styles.li}`}>
          <li>9Trails Sort</li>
          <li><a href='#'>Newest First</a></li>
          <li onClick={(e) => props.onChange(e)}><a href='#'>Oldest First</a></li>
          <li><a href='#'>Highest Rated</a></li>
          <li><a href='#'>Lowest Rated</a></li>
        </ul>
      </div>
      {props.reviews.map((reviewInfo, i) => {
        console.log(reviewInfo, 'inReviewLISTTTT')
        return <Review key={i} info={reviewInfo} trailname={props.trailname} />;
      })}
    </div>
  );
};

export default ReviewList;
