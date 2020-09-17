# PROJECT NAME
UMN PRESS HTML TWITTER WIDGET

# INTRODUCTION
This repo includes files that could allow the U of MN Press Twitter Search Application to be integrated into the UMN Press website. 

# FILES
## SCRIPTS
*widget.js* - this script contains the JavaScript code that could be wrapped in an HTML script tag and embedded on the book page.  It reads the title of the book, parses it, and queries the database for Tweet IDs corresponding to that book title.  It then uses these Tweet IDs to retrieve the HTML for each Tweet via Twitter's Embed API


## HTML
*widget.html*
*index.html*: this page is a sample page used strictly by the Prime Academy Development Team to test the Twitter embed script on a mock-up of a UMN Press'


# SERVER
The server is configured using Node.js and Express server to connect the database.  These files will likely need to be re-configured specificially for the U of MN Press' local servers.


# DATABASE

If deploying the U of MN Press Twitter Search App to Heroku, the widget can be configured to connect to the application database on Heroku.  Simply include DATBASE_URL=(*Heroku DATABASE_URL*) in a .env file, replacing "Heroku DATABASE_URL" with the DATABASE_URL found in under "Config Vars" of the app on your online Heroku account.

If deploying the app locally, simply replace the database name in the *pool.js* file with the name of your local database.