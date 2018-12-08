import React from 'react';
import ReactDOM from 'react-dom';
import Review from './review.jsx'

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
    }).then((data) => {
      fetch(`http://localhost/3002/user/${this.state.id}`)

    })
  }
  render(){
    return (
      <div>
        <Review />
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));