import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './ReviewList.jsx';
import { isProduction, determineId, determineEndpoint } from '../utils.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      trailname: '',
      list: 'newest',
      url: '',
      trailId: ''
    };
    // this.oldest = this.oldest.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
            reviews: reviews,
            trailId: trailId,
            list: 'newest',
            url: SERVICE_HOSTS
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

  handleChange(e) {
    determineEndpoint(e, endpoint => {
      fetch(`${this.state.url.reviews}/${this.state.trailId}/${endpoint}`)
        .then(response => {
          return response.json();
        })
        .then(reviews => {
          this.setState({
            reviews: reviews
          });
        });
    });
  };

  render() {
    return (
      <div>
        <ReviewList
          reviews={this.state.reviews}
          trailname={this.state.trailname}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
