import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import styles from '../../client/css/style.css';
import { isProduction } from '../utils.js';


const ReviewList = props => {
  return (
     <div>
      <h2>Share your experience to help other people learn more about this trail:</h2>
      <div className={`${styles.container}`}>
        <button className={`${styles.btn1}`}>Write Review</button>
        <button className={`${styles.btn2}`}>Upload Photos</button>
        <button className={`${styles.btn3}`}>Upload Track</button>
      </div>

      <div className={`${styles.final}`}>
        <span className={`${styles.sort_list}`}>NineTrails Sort</span> | <span onClick={(e) => props.onChange(e)}className={`${styles.sort_list}`}><a href='#'>Newest First</a></span> | <span onClick={(e) => props.onChange(e)}className={`${styles.sort_list}`}><a href='#'>Oldest First</a></span> | <span onClick={(e) => props.onChange(e)}className={`${styles.sort_list}`}><a href='#'>Highest Rated</a></span> | <span onClick={(e) => props.onChange(e)}className={`${styles.sort_list}`}><a href='#'>Oldest First</a></span> | <span onClick={(e) => props.onChange(e)}className={`${styles.sort_list}`}><a href='#'>Lowest Rated</a></span>
      </div>
      {props.reviews.map((reviewInfo, i, prod) => {
        return <Review key={i} info={reviewInfo} trailname={props.trailname} />;
      })}
    </div>
  );
};

export default ReviewList;

