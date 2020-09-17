# UMN PRESS HTML TWITTER WIDGET

# INTRODUCTION
This repo includes the files that the Prime Academy/University of Minnesota Press Twitter Widget Design Team used to test their Twitter Search Application outside of React.js.  The files in this repo could allow the U of MN Press Twitter Search Application to be integrated into the UMN Press website. 

## SCRIPTS
*widget.js* - this script contains the JavaScript code that could be wrapped in an HTML script tag and embedded on a book page on the U of MN Press' website.  It reads the title of the book, parses it, and queries the database for Tweet ID nubmers corresponding to that particular book title.  The script then uses these Tweet IDs to retrieve the HTML code for each Tweet from the Twitter Embed API.


## HTML
*widget.html*: 

*index.html*: this page is a sample page used soley by the Prime Academy Development Team to test their Twitter embed script on a mock-up of an individual book page from the UMN Press website.


# SERVER
The server is configured using Node.js and Express server to connect the database.  These files will likely need to be re-configured to match the parameters of the U of MN Press' local servers.  If these servers are configured using a different programming language (ex. Ruby, Python), these files would have to be re-written entirely.


# DATABASE
If deploying the U of MN Press Twitter Search App to Heroku, the widget can be configured to connect to the application database on Heroku.  Simply include DATBASE_URL=(*Heroku DATABASE_URL*) in a .env file, replacing "Heroku DATABASE_URL" with the DATABASE_URL found in under "Config Vars" of the app on your online Heroku account.

If deploying the app locally, simply replace the database name in the *pool.js* file with the name of your local database.