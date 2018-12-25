import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../client/css/style.css';
import { isProduction } from '../utils.js';
import Star from './Stars.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      url: '',
      date: ''
    };
  }

  componentDidMount() {
    //FETCHING FROM PROFILES SERVICE
    console.log(this.props.info.data.attributes.date, 'DATE');
    isProduction(null, process.env.NODE_ENV, SERVICE_HOSTS => {
      const date = this.props.info.data.attributes.date.replace(/\//g, '');
      fetch(`${SERVICE_HOSTS.reviews}/${date}/timeago`)
        .then(res => {
          return res.json();
        })
        .then(timeAgo => {
          this.setState({
            date: timeAgo
          });
        });
      fetch(
        `${SERVICE_HOSTS.profiles}/user/${
          this.props.info.data.attributes.user_id
        }`
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
    });
  }

  render() {
    return (
      <div>
        <title>Review </title>
        <div className={`${styles.review_box_main} ${styles.boxs}`}>
          <div className={styles.container}>
            <div className={`${styles.review_box_main_inner} ${styles.boxs}`}>
              <div
                className={`${styles.review_box_main_inner1} ${styles.boxs}`}
              >
                <div
                  className={`${styles.review_box_main_inner1_left} ${
                    styles.boxs
                  }`}
                >
                  <div className={styles.img_boxreview}>
                    <a href="#">
                      <img src={this.state.url} alt="review_img1" />
                    </a>
                  </div>
                  <span className={styles.position_img_badge} />
                </div>
                <div
                  className={`${styles.review_box_main_inner1_right} ${
                    styles.boxs
                  }`}
                >
                  <div className={`${styles.review_rating} ${styles.boxs}`}>
                    <h4>
                      <a href="#">{this.state.username}</a>
                      <a> on </a>
                      <a href="#">{this.props.trailname}</a>
                    </h4>
                    <span>
                      <Star stars={this.props.info.data.attributes.rating} />
                    </span>
                    <div
                      className={`${styles.hiking_anchorbox} ${styles.boxs}`}
                    >
                      <span>{this.props.info.data.attributes.activity}</span>
                    </div>
                  </div>
                  <div
                    className={`${styles.review_rating_days} ${styles.boxs}`}
                  >
                    <p>{this.state.date}</p>
                  </div>
                  <div className={`${styles.review_from_user} ${styles.boxs}`}>
                    <p>{this.props.info.data.attributes.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
