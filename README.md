# Tune-Spoon-api

This repo was created to be used with the Tune-Spoon project.

## Set Up

Clone this down, and `cd` into it.  Then run:

`npm install`
`cp .env.template .env`
`npm start`

## Endpoints

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all albums|`http://localhost:3000/album`| GET  | none | object with `album` property containing an array of all albums |
|Get single album|`http://localhost:3000/album/<id>`     *where`<id>` will be a number of a album's id* | GET  | none | object of single albums info |
|Get all reviews| `http://localhost:3000/albums/reviews` | GET | none | object with `reviews` property containing an array of all reviews |
|Get single review|`http://localhost:3000/album/reviews/<id>`     *where`<id>` will be a number of a album reviews's id* | GET  | none | object of single albums review info |
| Add new album |`http://localhost:3000/album`| POST | `POST INFO` | `{message: 'Album with id <id> successfully posted', newAlbum: <Object with allbum info just posted>}`|
| Add new review|`http://localhost:3000/albums/reviews`| POST | `POST INFO` | `{message: 'Review with id <id> successfully posted', newReview: <Object with review info just posted>}`|
| Delete single review| `http://localhost:3000/album/reviews/<id>`     *where`<id>` will be a number of a reviews's id*  | DELETE | none | Trip #<id> has been deleted |