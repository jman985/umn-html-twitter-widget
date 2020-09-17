# UMN Press HTML Twitter Widget

## INTRODUCTION
This repo includes the files that the Prime Academy University of Minnesota Press Twitter Widget Design Team used to test their Twitter Search Application outside of React.js.  The files in this repo should help the U of MN Press Twitter Search Application to be integrated into the UMN Press website. 

## SCRIPTS
*widget.js* - this script contains the JavaScript code that could be wrapped in an HTML script tag and embedded on a book page on the U of MN Press' website.  It reads the title of the book, parses it, and queries the database for Tweet ID numbers corresponding to that particular book title.  The script then uses these Tweet IDs to retrieve the HTML code for each Tweet from the Twitter Embed API.  Finally, these Tweets are appended to the DOM.


## HTML
*widget.html*: this page contains the same JavaScript code found in *widget.js* but wrapped in an HTML script tag.  It also contains Twitter's embed script sourced from https://platform.twitter.com/widgets.js which is needed for any embedded Twitter content to display correctly on the page.  This document also contains the corresponding <div> tag with id=#viewTweets, which should be placed on the HTML page anywhere the U of MN Press desires the embedded Tweets to display.  

*index.html*: this page is a simply a sample page used soley by the Design Team to test their Twitter Tweet embed script using a mock-up of an individual book page from the UMN Press website.


# SERVER
The server is configured using Node.js and Express server to connect the database.  These files will likely need to be re-configured to match the parameters of the U of MN Press' local servers.  If these servers are configured using a different programming language (ex. Ruby, Python), these files would have to be re-written entirely.


# DATABASE
After deploying the U of MN Press Twitter Search Application to Heroku, this widget can be configured to connect to the application's database on Heroku.  Simply include DATBASE_URL=(*Heroku DATABASE_URL*) in a .env file, replacing "Heroku DATABASE_URL" with the DATABASE_URL found in the "Config Vars" of the app's page online on your Heroku account dashboard.

If deploying the app locally, simply replace the database name in the *pool.js* file with the name of your local database.