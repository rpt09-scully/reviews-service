import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class Star extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: this.props.stars
    }
  }
  render() {

    return (
      <div>

        <StarRatingComponent
          name="rate2"
          editing={false}
          renderStarIcon={() => <span><h2>★</h2></span>}
          starCount={5}
          value={this.state.rating}
        />
      </div>
    );
  }
}
export default Star

