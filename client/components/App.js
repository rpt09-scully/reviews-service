import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './ReviewList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      reviews: [],
      trailname:''
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3004/${this.state.id}/reviewsNew`)
      .then(response => {
        return response.json();
      })
      .then(reviews => {
        this.setState({
          reviews: reviews
        });
      });
      //call to TrailService for trailname
      fetch(`http://localhost:3001/${this.state.id}/trailinfo`)
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


