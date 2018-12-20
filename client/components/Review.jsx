import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../client/css/style.css'

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      url: ''
    };
  }

  componentDidMount() {
    fetch(
      `http://localhost:3002/user/${this.props.info.data.attributes.user_id}`
    )
      .then(res => {
        return res.json();
      })
      .then(profile => {
        this.setState({
          username:
            profile.data.attributes.first_name +
            ' ' +
            profile.data.attributes.last_name,
          url: profile.data.attributes.photo_url
        });
      });
  }

  render() {
    return (
      <div>
        <title>Review </title>
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/font-awesome.min.css"
        />
        <link href="css/css.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link rel="stylesheet" type="text/css" href="css/media.css" />
        <div className="review_box_main boxs">
          <div className="container">
            <div className="review_box_main_inner boxs">
              {/*  first box start */}
              <div className="review_box_main_inner1 boxs">
                <div className="review_box_main_inner1_left boxs">
                  <div className="img_boxreview">
                    <a href="#">
                      <img src={this.state.url} alt="review_img1" />
                    </a>
                  </div>
                  <span className="position_img_badge" />
                </div>
                <div className="review_box_main_inner1_right boxs">
                  <div className="review_rating boxs">
                    <h4>
                      <a href="#">{this.state.username}</a>
                       on
                      <a href="#">{this.props.trailname}</a>
                    </h4>
                    <span>
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="review_rating_days boxs">
                    <p>8 days ago</p>
                  </div>
                  <div className="review_from_user boxs">
                    <p>{this.props.info.data.attributes.body}</p>
                  </div>
                </div>
              </div>
              {/*  first box end */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
