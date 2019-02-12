DROP DATABASE IF EXISTS revservice;

CREATE DATABASE revservice;

USE revservice;

CREATE TABLE activities (
  activity_id int NOT NULL AUTO_INCREMENT,
  body varchar(100),
  PRIMARY KEY (activity_id)
) ENGINE=InnoDB;

CREATE TABLE reviews (
  review_id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  trail_id int NOT NULL,
  description varchar(500),
  rating int NOT NULL,
  date varchar(20),
  act_id int NOT NULL,
  FOREIGN KEY (act_id) REFERENCES activities(activity_id),
  PRIMARY KEY (review_id)
) ENGINE=InnoDB;

INSERT INTO activities (body) VALUES ('Backpacking');
INSERT INTO activities (body) VALUES ('Birding');
INSERT INTO activities (body) VALUES ('Camping');
INSERT INTO activities (body) VALUES ('Cross Country Skiing');
INSERT INTO activities (body) VALUES ('Hiking');
INSERT INTO activities (body) VALUES ('Horseback Riding');
INSERT INTO activities (body) VALUES ('Mountain Biking');
INSERT INTO activities (body) VALUES ('Nature Trips');
INSERT INTO activities (body) VALUES ('Off Road Driving');
INSERT INTO activities (body) VALUES ('Paddle Sports');
INSERT INTO activities (body) VALUES ('Road Biking ');
INSERT INTO activities (body) VALUES ('Rock Climbing');
INSERT INTO activities (body) VALUES ('Scenic Driving');
INSERT INTO activities (body) VALUES ('Snow Shoeing');
INSERT INTO activities (body) VALUES ('Skiing');
INSERT INTO activities (body) VALUES ('Walking');


LOAD DATA LOCAL INFILE '/Users/ryanbrennan/Desktop/FEC/reviews-service/database/milly.csv'
INTO TABLE reviews
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(review_id, user_id, trail_id, description, rating, date, act_id);
