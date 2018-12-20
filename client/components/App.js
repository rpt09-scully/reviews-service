import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './ReviewList.jsx';
import { isProduction, determineId } from '../utils.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      trailname: ''
    };
  }

  componentDidMount() {
    const trailId = determineId();
    isProduction(trailId, process.env.NODE_ENV, SERVICE_HOSTS => {
      //FETCHING FROM REVIEW SERVICE
      fetch(`${SERVICE_HOSTS.reviews}/${trailId}/reviewsNew`)
        .then(response => {
          return response.json();
        })
        .then(reviews => {
          this.setState({
            reviews: reviews
          });
        });
        //FETCHING FROM TRAIL SERVICE
      fetch(`${SERVICE_HOSTS.trails}/${trailId}/trailinfo`)
        .then(response => {
          return response.json();
        })
        .then(trailInfo => {
          this.setState({
            trailname: trailInfo.data.attributes.trail_name
          });
        });
    });
  }
  render() {
    return (
      <div>
        <ReviewList
          reviews={this.state.reviews}
          trailname={this.state.trailname}
        />
      </div>
    );
  }
}
