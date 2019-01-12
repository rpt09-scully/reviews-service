# Reviews Service

Review service for Nine Trails Hack Reactor <abbr title="Front End Capstone">FEC</abbr> project. Supplies an API endpoint for review detail data at `/:reviewId/reviewInfo` on `port 3004`.

## Related Projects

- paths: https://github.com/rpt09-scully/paths-service
- profiles: https://github.com/rpt09-scully/profile-service
- photos: https://github.com/rpt09-scully/trail-photos-service
- trails: https://github.com/rpt09-scully/trail-service
- reviews [Current]

## Table of Contents

1. [Usage](#Usage)
1. [Tech](#Tech/Frameworks used)
1. [Development](#development)
1. [Additional Resources](#additional-resources)


## Usage
### API Endpoints
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

## Code Style

[![Style Guide: Hack Reactor](https://img.shields.io/badge/Style%20Guide-Hack%20Reactor-blue.svg)](https://github.com/hackreactor-labs/eslint-config-hackreactor)

## Tech/Frameworks used

- [mySQL](https://dev.mysql.com/doc/refman/5.7/en/)
- [Express](http://expressjs.com/)
- [React](http://reactjs.org/)

## Code Example

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
## Development

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
