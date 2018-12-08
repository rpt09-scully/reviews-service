import React from 'react';
import ReactDOM from 'react-dom';

const Review = (props) => {
  return (
    <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" type="image/ico" sizes="16x16" />
        <title>Review </title>
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
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
                      <img src="images/review_img1.jpg" alt="review_img1" />
                    </a>
                  </div>
                  <span className="position_img_badge" />
                </div>
                <div className="review_box_main_inner1_right boxs">
                  <div className="review_rating boxs">
                    <h4>
                      <a href="#">Jason Gerke</a>
                      on
                      <a href="#"> Crissy Field and the Palace of Fine Arts </a>
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                  </div>
                </div>
              </div>
              {/*  first box end */}
            </div>
          </div>
        </div>
      </div>
  )
}


export default Review