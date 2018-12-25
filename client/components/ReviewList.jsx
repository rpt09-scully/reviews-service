import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import styles from '../../client/css/style.css';
import { isProduction } from '../utils.js';


const ReviewList = props => {
  let prod = 1
  return (
    <div>
      <div>
        <ul className={`${styles.sort_list} ${styles.li}`}>
          <li>9Trails Sort</li>
          <li onClick={(e) => props.onChange(e)}><a href='#'>Newest First</a></li>
          <li onClick={(e) => props.onChange(e)}><a href='#'>Oldest First</a></li>
          <li onClick={(e) => props.onChange(e)}><a href='#'>Highest Rated</a></li>
          <li onClick={(e) => props.onChange(e)}><a href='#'>Lowest Rated</a></li>
        </ul>
      </div>
      {props.reviews.map((reviewInfo, i, prod) => {
        console.log(prod)
        console.log('Map Me san', reviewInfo.data.attributes.date, prod)
        return <Review key={i} info={reviewInfo} trailname={props.trailname} />;
      })}
    </div>
  );
};

export default ReviewList;
