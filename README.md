# Reviews Service

Review service for Nine Trails Hack Reactor <abbr title="Front End Capstone">FEC</abbr> project. Supplies an API endpoint for review detail data at `/:reviewId/reviewInfo` on `port 3004`.

- [1.2. Usage](#13-usage)
    - [1.2.1. API endpoints](#121-api-endpoints)
    - [1.2.2. Individual Component Page](#122-individual-component-page)
    - [1.2.3. JSON Example](#123-json-example)
- [1.4. Development Setup](#14-development-setup)

## 1.1. Related Projects

- paths: https://github.com/rpt09-scully/paths-service
- profiles: https://github.com/rpt09-scully/profile-service
- photos: https://github.com/rpt09-scully/trail-photos-service
- trails: https://github.com/rpt09-scully/trail-service
- reviews [Current]

## Usage

Reviews Service is a series of endpoints and 1 widget for 9 trails. The service contains a db for storing info about reviews.

**reviews widget**

![upload](https://giant.gfycat.com/SkeletalOrnateKillerwhale.mp4)

###  1.2.1 API Endpoints

Below you can find all available endpoints.

+ GET `/:trailId/trailStats`
  - Given a trailId, retrieves stats of trail according reviews given.
+ GET `/:trailId/reviewInfo`
  - Given a trailId, retrieves review information
+ GET `/:trailId/reviewsNew`
  - Given a trailId, retrieves all reviews sorted by most recent
+ GET `/:trailId/reviewsOld`
  - Given a trailId, retrieves all reviews sorted by oldest
+ GET `/:trailId/topReviews`
  - Given a trailId, retrieves all reviews sorted highest rated
+ GET `/:trailId/bottomReviews`
  - Given a trailId, retrieves all reviews sorted by lowest rated

### 1.2.2. Individual Component Page

Going to `GET /` aka the root server page, will render the individual components.



## 1.2.3 JSON Example

Example JSON response to `http:localhost:3004/1/reviewInfo` for a trail with an ID of `1`:

```json
{
  "data": {
    "type": "reviews",
    "id": 1,
    "attributes": {
      "user_id": 24,
      "trail_id": 1,
      "body": "We got to hike the trail at sunset and got some amazing pictures. The view was worth every step!",
      "activity": "Backpacking",
      "rating": 5,
      "date": "10/22/2016"
    }
  }
}
```

## 1.3. Code Style

[![Style Guide: Hack Reactor](https://img.shields.io/badge/Style%20Guide-Hack%20Reactor-blue.svg)](https://github.com/hackreactor-labs/eslint-config-hackreactor)


## 1.4. Development Setup

This service uses the following dev stack:

  - Server: [Express](http://expressjs.com/)
  - Deployment: [Elastic Beanstalk on AWS](https://aws.amazon.com/elasticbeanstalk/)
  - Client:[React](http://reactjs.org/)
  - DB: [mySQL](https://dev.mysql.com/doc/refman/5.7/en/)
  - Testing: [Mocha/Chai](https://www.chaijs.com/)



### Installing Dependencies

```sh
# cd into directory
$> cd reviews-service
# install dependencies
$> npm install
# setup .env file (for sql creds)
$> touch .env
# seed database `revService` (change credentials as needed)
$> npm run seed-db
```

Inside `.env` place your SQL credentials (change if needed)
```
# DB_HOST=localhost
# DB_USER=root
# DB_PASS=
```

To execute:

```sh
$ npm run server-dev
$ npm run react-dev
```

## Tests
For Server and database:
```sh
$ npm run test-server
```
