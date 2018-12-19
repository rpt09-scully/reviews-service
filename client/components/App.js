import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './ReviewList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      trailname:''
    };
  }

  componentDidMount() {
    const determineId = () => {
      if (window.location.pathname.length > 1) {
        return parseInt(window.location.pathname.substring(1));
      } else {
        return 1;
      }
    }
    const id = determineId();
    console.log(id)
    fetch(`http://localhost:3004/${id}/reviewsNew`)
      .then(response => {
        return response.json();
      })
      .then(reviews => {
        this.setState({
          reviews: reviews
        });
      });
      //call to TrailService for trailname
      fetch(`http://localhost:3001/${id}/trailinfo`)
      .then(response => {
        return response.json();
      })
      .then((trailInfo) => {
        this.setState({
          trailname: trailInfo.data.attributes.trail_name
        })
      })
  }
  render() {
    return (
      <div>
        <ReviewList reviews={this.state.reviews} trailname={this.state.trailname}/>
      </div>
    );
  }
}


