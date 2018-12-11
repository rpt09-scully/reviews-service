import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Reviews from './review.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: 4,
      reviews: [],
      profiles: []
    }
  }

  componentDidMount(){
    fetch(`/${this.state.id}/reviewsNew`)
    .then((response) => {
      return response.json();
    }).then((reviews) => {
      this.setState({
        reviews: reviews
      })
    })

  }
  render() {
    return (
      <div>
        <Reviews reviews={this.state.reviews}/>
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));