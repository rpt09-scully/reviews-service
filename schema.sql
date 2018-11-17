DROP DATABASE IF EXISTS revservice;

CREATE DATABASE revservice;

USE revservice;

CREATE TABLE reviews (
  review_id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  trail_id int NOT NULL,
  description varchar(500),
  date date,
  PRIMARY KEY (review_id)
) ENGINE=InnoDB;

INSERT INTO reviews (review_id, user_id, trail_id, description, date) VALUES (null, 1, 1, 'Hey this thing is awesome', '2018-08-01')