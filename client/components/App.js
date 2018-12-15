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
      profiles: []
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
  }
  render() {
    return (
      <div>
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

// module.exports = App;


// ReactDOM.render(<App />, document.getElementById('app'));
