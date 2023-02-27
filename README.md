# Tune-Spoon-api

This repo was created to be used with the Tune-Spoon project.

## Set Up

Clone this down, and `cd` into it.  Then run:

`npm install`

`npm start`

## Endpoints

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all albums|`https://tune-spoon-db-v1.herokuapp.com/albums`| GET  | none | object with `album` property containing an array of all albums |
|Get single album|`https://tune-spoon-db-v1.herokuapp.com/album/<id>`     *where`<id>` will be a number of a album's id* | GET  | none | object of single albums info |
|Get all reviews| `https://tune-spoon-db-v1.herokuapp.com/reviews` | GET | none | object with `reviews` property containing an array of all reviews |
| Add new review|`https://tune-spoon-db-v1.herokuapp.com/reviews`| POST | `POST INFO` | `{message: 'Review with id <id> successfully posted', newReview: <Object with review info just posted>}`|
| Delete single review| `http://localhost:3000/album/reviews/<id>`     *where`<id>` will be a number of a reviews's id*  | DELETE | none | Trip #<id> has been deleted |

### Contributors
- Adam Hughes [LinkedIn](https://www.linkedin.com/in/front-end-adam/), [Github](https://github.com/ajh0050)<br>
- Gus Deribeaux [LinkedIn](https://www.linkedin.com/in/gus-deribeaux-562a511aa/), [Github](https://github.com/gderibeaux)<br>
- Natalie Kinsaul Lange [LinkedIn](https://www.linkedin.com/in/natalie-kinsaul/), [Github](https://github.com/nkinsaul/)<br>
- Zac Walters [LinkedIn](https://www.linkedin.com/in/zac-walters-67951b250/), [Github](https://github.com/zacwalters4)<br>

## Purpose
This API was built by us from scratch to serve data from our custom backend. We first scraped data from lastfm's api, then converted the data to json, then built a database with this data using postgresql, to migrate and seed the data we used knex.js, and finally to deploy the data we used heroku. 

##Tech stack
Node, Express, Knex, PostgreSQL, heroku
