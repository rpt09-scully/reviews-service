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

INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (74, 1, "Awesome views of the ocean and golden gate. Downside is how much foot traffic there is.", "9/18/2016", 14);
INSERT INTO reviews(user_id, trail_id, description, date, act_Id) VALUES (97, 1, "I feel like I am on top of the world when Iam here...even though I am at sea level....but who is really keeping track of the elevation, except me. Iguess I\'m the only one.  I need to get out more.  Ping me if anyone wants to hang out, I\'m pretty much always avaialable.", "9/2/2016", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (69, 1, "Sickest Time I ever had in my life, I wanna burst", "5/4/2016", 5);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (24, 1, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "7/5/2016", 5);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (16, 1, "I proposed but she laughed in my face.  It\'s cool though, there was a bar nearby", "9/4/2016", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (70, 1, "One of my favorite trails in the city and a major reason why I love living here. The views are stunning. Well worth the effort.", "8/27/2017", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES(80, 1, "One of my favorite trails in the city and a major reason why I love living here. The views are stunning. Well worth the effort.", "4/24/2018", 4);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (11, 1, "I lost my watch but it really didn\'t bother me none", "8/13/2016", 14);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (77, 1, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "3/20/2016", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (14, 1, "We got to hike the trail at sunset and got some amazing pictures.The view was worth every step!", "6/8/2018", 8);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (19, 1, "easy hike with great views!", "9/4/2016", 12);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (85, 1, "PM me and I\'ll give you the sickest mixtape ever to run here with.  Do they even say mixtape anymore?  Doesn\'t matter.  You\'ll love it, I swear", "3/22/2016",12);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (4, 1, "Fun and easy hike.Gets crowded on Saturday especially when the weather is nice. Will do it again since it’s just minutes away from my home.", "3/29/2017", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (25, 2, "One of the most beautiful views.", "10/2/2016", 12);
INSERT INTO reviews (user_id, trail_id,description, date, act_Id) VALUES (32, 2, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "10/10/2017", 13);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (17, 2, "Easy loop, great view, best to go on a weekday though if you can.", "5/20/2017", 2);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (84, 2, "One of my favorite trails in the city and a major reason why I love living here. The views are stunning. Well worth the effort.", "2/26/2017",8);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (81, 2, "Reminds me of thatplace in Barcelona.  The place with all the sunshine.", "1/11/2016", 13);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (72, 2, "Incredible wild trail and one of the best parts of SanFrancisco.", "7/3/2016", 14);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (56, 2, "Awesome views of the ocean and golden gate. Downside is how much foot traffic there is.", "2/8/2018", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (50, 2, "I remember hiking here 40 years ago ... only tiny dirt trails. How time changes. Beautiful nevertheless", "4/29/2018", 13);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (34, 2, "I lost my watch but it really didn\'t bother me none", "8/12/2018", 5);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (73, 2, "Incredible wild trail and one of the best parts of San Francisco.", "7/11/2017", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (36, 2, "PM me and I\'llgive you the sickest mixtape ever to run here with.  Do they even say mixtape anymore?  Doesn\'t matter.You\'ll love it, I swear", "6/29/2016", 14);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (44, 3, "So fortunate to have caught it on a clear day. Easily one of the most beautiful urban hikes I have seen. Parking was a breeze at the visitors center.", "11/5/2018", 8);
INSERT INTO reviews(user_id, trail_id, description, date, act_Id) VALUES (28, 3, "Beautiful place", "5/28/2017", 11);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (84, 3, "Incredible wild trail and one of the best parts of San Francisco.", "7/23/2018", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (93, 3, "One of my favorite trails in the city and a major reason why I love living here. The views are stunning. Well worth the effort.", "2/11/2017", 14);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (2, 3, "I feel like I am on top of the world when I am here...even though I am at sea level....but who is really keeping track of the elevation, except me. I guess I\'m the only one.  I need to get out more.  Ping me if anyone wants to hang out, I\'m pretty much always avaialable.", "11/9/2018", 2);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (88, 3, "Awesome views of the ocean and golden gate. Downside is how much foot traffic there is.", "5/18/2017", 9);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (67, 3, "Beautiful views! Caught a gorgeous sunset towards the end of the hike. Includes some challenging stairs and climbing that could be an issue for some. Trail was a little crowded and loud at times, but the views were so worth it.", "10/17/2018", 5);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (34, 3, "Easy loop, great view, best to go on a weekday though if you can.", "7/8/2017", 11);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (70, 4, "So fortunate to have caught it on a clear day. Easily one of the most beautiful urban hikes I have seen. Parking was a breeze at the visitors center.", "9/20/2016", 11);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (27, 4, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "6/21/2018", 14);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (14, 4, "Beautiful views! Caught a gorgeous sunset towards the end of the hike. Includes some challenging stairs and climbing that could be an issue for some. Trail was a little crowded and loud at times, but the views were so worth it.", "8/28/2018", 14);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (46, 4, "One of the most beautiful views.", "7/20/2016", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (4, 4, "I feel like I am on top of the world when I am here...even though I am at sea level....but who is really keeping track of the elevation, except me. I guess I\'m the only one.  I need to get out more.  Ping me if anyone wants to hang out, I\'m pretty much always avaialable.", "4/26/2018", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (90, 4, "One of my favorite trails in the city and a major reason why I love living here. The views are stunning. Well worth the effort.", "8/9/2016", 4);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (13, 4, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "11/9/2018", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (51, 4, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "7/29/2017", 11);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (95, 4, "Incredible wild trail and one of the best parts of San Francisco.", "8/23/2018", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (92, 4, "Beautiful views! Caught a gorgeous sunset towards the end of the hike. Includes some challenging stairs and climbing that could be an issue for some. Trail was a little crowded and loud at times, but the views were so worth it.", "9/24/2018", 2);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (71, 4, "We got to hike the trail at sunset and got some amazing pictures. The view was worth every step!", "10/28/2016", 12);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (96, 4, "Beautiful views! Caught a gorgeous sunset towards the end of the hike. Includes some challenging stairs and climbing that could be an issue for some. Trail was a little crowded and loud at times, but the views were so worth it.", "6/23/2017", 4);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (85, 5, "easy hike with great views!", "3/7/2016", 14);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (27, 5, "Incredible wild trail and one of the best parts of San Francisco.", "5/27/2017", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (95, 5, "I proposed but she laughed in my face.  It\'s cool though, there was a bar nearby", "9/16/2018", 8);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (62, 5, "We got to hike the trail at sunset and got some amazing pictures. The view was worth every step!", "1/20/2018", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (32, 5, "Sickest Time I ever had in my life, I wanna burst", "9/25/2016", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (91, 5, "One of my favorite trails in the city and a major reason why I love living here. The views are stunning. Well worth the effort.", "5/18/2018", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (45, 5, "easy hike with great views!", "6/24/2018", 13);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (77, 6, "Beautiful views! Caught a gorgeous sunset towards the end of the hike. Includes some challenging stairs and climbing that could be an issue for some. Trail was a little crowded and loud at times, but the views were so worth it.", "4/20/2018", 2);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (24, 6, "Sickest Time I ever had in my life, I wanna burst", "2/16/2017", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (79, 6, "I feel like I am on top of the world when I am here...even though I am at sea level....but who is really keeping track of the elevation, except me. I guess I\'m the only one.  I need to get out more.  Ping me if anyone wants to hang out, I\'m pretty much always avaialable.", "10/7/2017", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (94, 6, "PM me and I\'ll give you the sickest mixtape ever to run here with.  Do they even say mixtape anymore?  Doesn\'t matter.  You\'ll love it, I swear", "9/3/2018", 5);
INSERT INTO reviews (user_id, trail_id,description, date, act_Id) VALUES (10, 6, "One of the most beautiful views.", "7/18/2017", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (17, 6, "Beautiful views! Caught a gorgeoussunset towards the end of the hike. Includes some challenging stairs and climbing that could be an issue for some. Trail was a little crowded and loud at times, but the views were so worth it.", "8/29/2017", 12);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (29, 6, "I feel like I am on top of the world when I am here...even though I am at sea level....but who is really keeping track of the elevation, except me. I guess I\'m the only one.  I need to get out more.  Ping me if anyone wants to hang out, I\'m pretty much always avaialable.", "7/3/2016", 10);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (7, 6, "We got to hike the trail at sunset and got some amazing pictures. The view was worth every step!", "7/24/2018", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (98, 7, "I proposed but she laughed in my face.  It\'s cool though, there was a bar nearby","2/3/2016", 2);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (32, 7, "Awesome views of the ocean and golden gate. Downside is how much foot traffic there is.", "3/26/2018", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (88, 7, "PM me and I\'ll give you thesickest mixtape ever to run here with.  Do they even say mixtape anymore?  Doesn\'t matter.  You\'ll loveit, I swear", "6/7/2016", 8);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (14, 7, "Beautiful views! Caught a gorgeous sunset towards the end of the hike. Includes some challenging stairs and climbing that could be an issue for some. Trail was a little crowded and loud at times, but the views were so worth it.", "3/17/2018", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (7, 7, "Beautiful views! Caught a gorgeous sunset towards the end of the hike. Includes some challenging stairs and climbing that could be an issue for some. Trail was a little crowded and loud at times, but the views were so worth it.", "3/12/2016", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (66, 7, "We got to hike the trail at sunset and got some amazing pictures. The viewwas worth every step!", "10/24/2017", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (55, 7, "I remember hiking here 40 years ago ... only tiny dirt trails. How time changes. Beautiful nevertheless", "4/9/2018", 6);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (44, 7, "I proposed but she laughed in my face.  It\'s cool though, there was a bar nearby", "5/3/2018", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (61, 7, "We got to hike the trail at sunset and got some amazing pictures. The view was worth every step!", "11/2/2016", 9);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (65, 7, "easy hike with great views!", "2/19/2018", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (50, 7, "So fortunate to have caught it on a clear day. Easily one of the most beautiful urban hikes I have seen. Parking was a breeze at the visitors center.", "2/13/2016", 8);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (11, 7, "Beautiful views! Caught a gorgeous sunset towards the end of the hike. Includes some challenging stairs and climbing that could be an issue for some. Trail was a little crowded and loud at times, but the views were so worth it.", "10/10/2018", 4);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (73, 7, "Easy loop, great view, best to go on a weekday though ifyou can.", "11/20/2018", 6);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (37, 8, "I remember hiking here 40 years ago ... only tiny dirt trails. How time changes. Beautiful nevertheless", "6/26/2018", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (9, 8, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "11/12/2016", 12);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (88, 8, "easy hike with great views!", "10/15/2016", 13);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (37, 8, "Easy loop, great view, best to go on a weekday though if you can.", "7/23/2016", 14);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (37, 8, "I lost my watch but it really didn\'t bother me none", "1/10/2016", 13);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (36, 9, "Awesome views of the ocean and golden gate. Downside is how much foot traffic there is.", "8/23/2018", 13);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (7, 9, "I feel like I am on top of the world when I am here...even though I am at sea level....but who is really keeping track of the elevation, except me. I guess I\'m the only one.  I need to get out more.  Ping me if anyone wants to hang out, I\'m pretty much always avaialable.", "1/18/2016", 10);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (15, 9, "Awesome views of the ocean and golden gate. Downside is how much foot traffic there is.", "4/1/2016", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (94, 9, "We got to hike the trail at sunset and got some amazing pictures. The view was worth every step!", "4/14/2017", 10);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (52, 9, "PM me and I\'ll give you the sickest mixtape ever to run here with.  Do they even say mixtape anymore?  Doesn\'t matter.  You\'ll love it, I swear", "10/19/2018", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (10, 9, "easy hike with great views!", "5/1/2016", 9);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (49, 10, "Incredible wild trail and one of the best parts of San Francisco.", "5/19/2017", 2);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (98, 10, "Beautiful place", "8/8/2017", 8);
INSERT INTO reviews (user_id, trail_id, description,date, act_Id) VALUES (38, 10, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "8/9/2017", 4);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (13, 10, "Sickest Time I ever had in my life, I wanna burst", "8/25/2016", 6);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (52, 10, "Beautiful place", "5/29/2016", 9);
INSERT INTO reviews (user_id,trail_id, description, date, act_Id) VALUES (78, 10, "One of my favorite trails in the city and a major reason why I love living here. The views are stunning. Well worth the effort.", "1/29/2016", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (53, 10, "We got to hike the trail at sunset and got some amazing pictures. The view was worth every step!", "5/15/2016", 11);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (57, 10, "One of my favorite trails in the city and amajor reason why I love living here. The views are stunning. Well worth the effort.", "3/21/2016", 2);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (90, 11, "Incredible wild trail and one of the best parts of San Francisco.", "4/16/2017", 4);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (10, 11, "We got to hike the trail at sunset and got some amazing pictures. The view was worth every step!", "2/6/2018", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (57, 11, "Beautiful place", "7/15/2017", 2);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (91, 11, "Fun and easy hike. Gets crowded on Saturday especially when the weather is nice. Will do it again since it’s just minutes away from my home.", "2/7/2016", 4);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (31, 11, "PM me and I\'ll give you the sickestmixtape ever to run here with.  Do they even say mixtape anymore?  Doesn\'t matter.  You\'ll love it, I swear", "9/7/2016", 12);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (29, 11,"Fun and easy hike. Gets crowded on Saturday especially when the weather is nice. Will do it again since it’s just minutes away from my home.", "2/12/2018", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (92, 11, "easy hike with great views!", "8/4/2018", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (81, 11, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "4/29/2017", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (75, 11, "Incredible wild trail and one of the best parts of San Francisco.", "6/2/2018", 14);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (22, 11, "Easy loop, great view, best to go on a weekday though if you can.", "7/28/2017", 6);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (44, 12, "Beautiful place", "7/16/2017", 6);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (18, 12, "We got to hike the trail at sunset and got some amazing pictures. The view was worth every step!", "11/7/2018", 8);
INSERT INTO reviews (user_id, trail_id,description, date, act_Id) VALUES (69, 12, "One of my favorite trails in the city and a major reason why Ilove living here. The views are stunning. Well worth the effort.", "8/6/2016", 13);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (25, 12, "Beautiful views! Caught a gorgeous sunset towards the end of the hike. Includes some challenging stairs and climbing that could be an issue for some.Trail was a little crowded and loud at times, but the views were so worth it.", "8/26/2017", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (77, 12, "Awesome views of the ocean and golden gate. Downside is how much foot traffic there is.", "5/9/2017", 9);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (87, 12, "One of the most beautiful views.", "5/20/2016", 14);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (86, 12, "Sickest Time I ever had in my life, I wanna burst", "7/9/2016", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (18, 12, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "1/8/2017", 2);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (14, 12, "So fortunate to have caught it on a clear day. Easily one of the most beautiful urban hikes I have seen. Parking was a breeze at the visitors center.", "3/28/2018", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (78, 12, "I proposed but she laughed in my face.  It\'s cool though, there was a bar nearby", "11/9/2018", 13);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (62, 12, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "3/15/2018", 14);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (2, 13, "Fun and easy hike. Gets crowded on Saturday especially when the weather is nice. Will do it again since it’s just minutes away from my home.", "11/14/2016", 5);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (97, 13, "One of my favorite trails in the city and a major reason why I love living here. The views are stunning. Well worth the effort.", "9/24/2016", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (57, 13, "One of the most beautiful views.", "6/6/2017", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (62, 13, "Incredible wild trail and one of the best parts of San Francisco.", "2/8/2016", 6);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (33, 14, "Awesome views of the ocean and golden gate. Downside is how much foot traffic there is.", "9/2/2017",5);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (72, 14, "One of my favorite trails in the city and a major reason why I love living here. The views are stunning. Well worth the effort.", "7/3/2018", 2);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (41, 14, "So fortunate to have caught it on a clear day. Easily one of the most beautiful urban hikes I have seen. Parking was a breeze at the visitors center.", "9/26/2018", 12);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (93, 14, "Awesome views of the ocean and golden gate. Downside is how much foot traffic there is.", "8/11/2016", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (88, 14, "Fun and easy hike. Gets crowded on Saturday especially when the weather is nice. Will do it again since it’s just minutes away from my home.", "8/7/2016", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (15, 14, "I feel like I am on top of the world when I am here...even though I am at sea level....but who is really keeping track of the elevation, except me. I guess I\'m the only one.  I need to get out more.  Ping me if anyone wants to hang out, I\'m pretty much always avaialable.", "1/26/2016", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (82,14, "Sickest Time I ever had in my life, I wanna burst", "5/29/2017", 8);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (90, 14, "Incredible wild trail and one of the best parts of San Francisco.", "2/16/2016", 12);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES(99, 14, "One of my favorite trails in the city and a major reason why I love living here. The views are stunning. Well worth the effort.", "3/28/2016", 4);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (93, 14, "So fortunate to have caught it on a clear day. Easily one of the most beautiful urban hikes I have seen. Parking was a breeze at the visitors center.", "9/22/2016", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (67, 14, "Beautiful place", "2/1/2018", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (47, 15, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "9/26/2017", 14);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (62, 15, "I feel like I am on top of the world when I am here...even though I am at sea level....but who is really keeping track of the elevation, except me. I guess I\'m the only one.  I need to get out more.  Ping me if anyone wants to hang out, I\'m pretty much always avaialable.", "7/21/2018", 10);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (25, 15, "I feel like I am on top of the world when I am here...even though I am at sea level....but who is really keeping track of the elevation, except me. I guess I\'m the only one.  I need to get out more.  Ping me if anyone wants to hang out, I\'m pretty much always avaialable.", "3/29/2018", 4);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (94, 15, "Beautiful place", "7/3/2016", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (49, 15, "One of the most beautiful views.", "3/7/2016", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (23, 15, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "2/14/2017", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (17, 15, "Easy loop, great view, best to go on a weekday though if you can.", "1/8/2018", 9);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (32, 15, "So fortunate to have caught it on a clear day. Easily one of the most beautiful urban hikes I have seen. Parking was a breeze at the visitors center.", "9/15/2018", 7);
INSERT INTO reviews(user_id, trail_id, description, date, act_Id) VALUES (24, 15, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "7/26/2016", 4);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (11, 16, "Reminds me of that place in Barcelona.  The place with all the sunshine.", "8/25/2017", 9);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (34, 16, "So fortunate to have caught it on a clear day. Easily one of the most beautiful urban hikes I have seen. Parking was a breeze at the visitors center.", "7/23/2017", 14);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (31, 16, "I remember hiking here 40 years ago ... only tiny dirt trails. How time changes. Beautiful nevertheless", "5/15/2018", 2);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (4, 16, "I proposed but she laughed in my face.  It\'s cool though, there was a bar nearby", "8/9/2017", 5);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (94, 16, "One of my favorite trails in the city and a major reason why I love living here. The views are stunning. Well worth the effort.", "2/17/2018", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (40, 16, "One of the most beautiful views.", "1/28/2016", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (72, 16, "I remember hiking here 40 years ago ... only tiny dirt trails. How time changes. Beautiful nevertheless", "8/27/2017", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (49, 17, "We got to hike the trail at sunset and got some amazing pictures. The view was worth every step!", "10/16/2016", 13);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (70, 17, "Beautiful place", "7/14/2017", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (89, 17, "Easy loop, great view, best to go on a weekday though if you can.", "9/24/2016", 8);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (14,17, "Awesome views of the ocean and golden gate. Downside is how much foot traffic there is.", "11/26/2018", 10);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (71, 17, "Beautiful place", "9/3/2016", 9);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (27, 17, "Awesome views of the ocean and golden gate. Downside is how much foot traffic there is.", "11/23/2016", 5);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (56, 17, "Incredible wild trailand one of the best parts of San Francisco.", "9/21/2016", 4);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (93, 18, "So fortunate to have caught it on a clear day. Easily one of themost beautiful urban hikes I have seen. Parking was a breeze at the visitors center.", "9/2/2017", 2);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (74, 18, "Fun and easy hike. Gets crowded on Saturday especially when the weather is nice. Will do it again since it’s just minutes away from my home.", "5/10/2017", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (41, 18, "We got to hike the trail at sunset and got some amazing pictures. The view was worth every step!", "6/20/2016", 9);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (99, 18, "Funand easy hike. Gets crowded on Saturday especially when the weather is nice. Will do it again since it’s just minutes away from my home.", "6/7/2017", 9);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (44, 18, "Fun and easy hike. Gets crowded on Saturday especially when the weather is nice. Will do it again since it’s just minutes away from my home.", "10/26/2016", 14);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (6, 18, "Beautiful place", "7/15/2017", 10);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (95, 18, "I remember hiking here 40 yearsago ... only tiny dirt trails. How time changes. Beautiful nevertheless", "5/22/2016", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (9, 18, "PM me and I\'ll give you the sickest mixtape ever to run here with.  Do they even say mixtape anymore?  Doesn\'t matter.  You\'ll love it, I swear", "3/17/2017", 11);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (54, 18,"Sickest Time I ever had in my life, I wanna burst", "3/24/2016", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (22, 18, "Beautiful place", "5/11/2017", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (8, 19, "Beautiful place", "7/1/2017", 8);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (62, 19, "One of my favorite trails in thecity and a major reason why I love living here. The views are stunning. Well worth the effort.", "5/10/2016", 3);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (25, 19, "Sickest Time I ever had in my life, I wanna burst", "7/28/2016", 8);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (37, 19, "Easy loop, great view, best to go on a weekday though if you can.", "11/19/2016", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (75, 19, "One of my favorite trails in the city and a major reason why I love living here. The views are stunning. Well worth the effort.", "6/20/2018", 10);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (91, 19, "We got to hike the trail at sunset and got some amazing pictures. The view was worth every step!", "8/16/2017", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (54, 19, "Beautiful views! Caught a gorgeous sunset towards the end of the hike. Includes some challenging stairs and climbing that could be an issue for some. Trail was a little crowded and loud at times, but the views were so worth it.", "1/27/2017", 2);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (42, 19, "easy hike with great views!", "3/27/2017", 13);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (49, 20, "Incredible wild trail and one of the best parts of San Francisco.","5/16/2018", 15);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (68, 20, "Incredible wild trail and one of the best parts of San Francisco.", "9/18/2017", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (64, 20, "Awesome views of the ocean and golden gate. Downside is how much foot traffic there is.", "3/18/2017", 1);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (43, 20, "Fun and easy hike. Gets crowded on Saturday especially when the weather is nice. Will do it again since it’s just minutes away from my home.", "5/23/2016", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (16, 20, "Easy loop, great view, best to go on a weekday though if you can.", "2/12/2017", 4);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (14, 20, "I lost my watch but it really didn\'t bother me none", "7/13/2018", 7);
INSERT INTO reviews (user_id, trail_id, description, date, act_Id) VALUES (24, 20, "I feel like I am on top of the world when I am here...even though I am at sea level....but who is really keeping track of the elevation, except me. I guess I\'m the only one.  I need to get out more.  Ping me if anyone wants to hang out, I\'m pretty much always avaialable.", "5/4/2018", 8);

