# PROJECT NAME
UMN PRESS HTML TWITTER WIDGET

# INTRODUCTION
This project seeks to mirror how the U of MN Press Twitter Search Application could be integrated into the UMN Press webpage. 


# SCRIPTS
widget.js - this contains the JavaScript code that can wrapped in an HTML script tag and embedded in a book page.  It reads the title of the book, parses it, and queries the database for Tweet IDs corresponding to that book title.  It then uses these Tweet IDs to retrieve the HTML for each Tweet via Twitter's Embed API




# SERVER
The script uses Node.js and Express server to connect the database.

# DATABASE

After deploying the U of MN Press Twitter Search App to Heroku, the widget can be configured to connect to the application database on Heroku.  Simply include DATBASE_URL=(Heroku DATABASE_URL) in a .env file, replacing "Heroku DATABASE_URL" with the DATABASE_URL found in under "Config Vars" of the app on your online Heroku account.