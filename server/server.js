const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const widgetRouter = require('./routes/widget.router')
const widgetTitleRouter = require('./routes/widgetTitle.router')


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// ROUTES
app.use('/api/tweets', widgetRouter)
app.use('/api/tweets2', widgetTitleRouter)

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
