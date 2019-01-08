import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import styles from '../../client/css/style.css';
import { isProduction } from '../utils.js';


const ReviewList = props => {
  return (
    <div>
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
