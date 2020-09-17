const express = require('express');
const pool = require('./pool');
const router = express.Router();
const {default: axios} = require('axios');

/**
 * GET route to db for tweet ids using title tag in html page
 */
router.get( '/:title', ( req, res )=>{
    console.log( 'this router /api/tweets2 GET', req.params.title);
    pool.query( `SELECT tweet.tweet_id FROM tweet 
    JOIN publication ON publication.id = tweet.publication_id WHERE publication.title LIKE $1 
    AND tweet.approved = TRUE ORDER BY tweet.id;`,['%'+ req.params.title + '%'])

    .then( ( result )=>{
        // success
        res.send( result.rows );
    }).catch( ( err )=>{
        // error
        res.sendStatus( 500 );
    })
})


// GET Tweet from Twitter Embed API

router.get('/:title/:tweet_id', (req, res) => {
    console.log( 'in router /api/tweets2 GET embed html', req.params );
    
    axios.get(`https://publish.twitter.com/oembed?url=https://twitter.com/anyuser/status/${req.params.tweet_id}&omit_script=true`)

        .then((response)=>{
            console.log('sending back:', response.data.html);
            res.send(response.data.html);
        })
        .catch((error)=>{
            console.log('error with Twitter GET', error);
            res.sendStatus(500);
        });
})




module.exports = router;