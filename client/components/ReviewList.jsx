import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';


const ReviewList = (props) => {
  return (
    <div>

    {props.reviews.map((reviewInfo, i) => {
      return <Review key={i} info={reviewInfo} trailname={props.trailname}/>
    })}
  </div>
  )

}




export default ReviewList;