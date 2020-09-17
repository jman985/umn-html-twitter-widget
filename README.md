# UMN Press HTML Twitter Widget

## Introduction
This repo contains the files that the University of Minnesota Press Twitter Widget Design Team at Prime Academy used to test their Twitter Search Application outside of *React.js*, in an environment that most closely mirrors that in which the U of MN Press will likely deploy the widget on their website.  These files were used to simulate how the Twitter Search Application could connect to an external website.

## Scripts
#### *widget.js*
This script contains the JavaScript code that could be wrapped in an HTML script tag and embedded on a book page on the U of MN Press' website.  It reads the title of the book, parses it, and queries the database for Tweet ID numbers corresponding to that particular book title.  The script then uses these Tweet IDs to retrieve the HTML code for each Tweet using the Twitter Embed API.  Finally, these Tweets are appended to the DOM.


## HTML Pages
#### *widget.html*
This page contains the same JavaScript code found in *widget.js* but wrapped in an HTML **script** tag.  It also contains Twitter's embed script sourced from https://platform.twitter.com/widgets.js . *This script is needed on an HTML page for any embedded Twitter content to display correctly on the webpage*.  This document also contains the corresponding **div** tag with id = #viewTweets, which should be placed on the HTML page anywhere the U of MN Press desires the embedded Tweets to display.  


#### *index.html*
This page is simply a sample page used soley by the Design Team to test their Twitter Tweet embed script using a mock-up of an individual book page from the UMN Press website.


## Server
The server is configured using Node.js, Express server, and pg (a PostgreSQL client for Node.js) to connect to a PostgresSQL database.  These files will likely need to be re-configured to match the parameters of the U of MN Press' local servers.  If the U of MN servers are configured using a different programming language (ex. Ruby, Python), these files would have to be re-written entirely.


## Database
After deploying the U of MN Press Twitter Search Application to Heroku, the files in this repo can be configured to connect to the application's database on Heroku.  Simply include DATBASE_URL=(*Heroku DATABASE_URL*) in a .env file, replacing "Heroku DATABASE_URL" with the DATABASE_URL found in the "Config Vars" of the app's online Settings page on your [Heroku](https://dashboard.heroku.com/apps) account dashboard.

If deploying the app locally, simply replace the database name in the *pool.js* file with the name of your local database.