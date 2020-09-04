console.log( 'js' );


//onready function for when page loads
$( document ).ready( function(){
  console.log( 'JQ' );
  // fetch('/api/tweets/1',
  //             { method: 'GET',
  //               mode: 'no-cors',
  //                               }
  //             ).then( response => response.json()

  //             ).then(data=> {
  //                 console.log('tweet ids:',data);

  //                 for(let i=0;i<data.length;i++){
  //                     console.log('tweet id', data[i].tweet_id);
                      
  //                     fetch('/api/tweets/1/' + data[i].tweet_id,
  //                     { method: 'GET',
  //                     mode: 'no-cors',
  //                                     }

  //                     ).then(response=> response.text()
                      
  //                     ).then(html => {console.log('this is the tweet html', html)
                                      
  //                         let tweetContainer = document.getElementById('viewTweets');
  //                         console.log(tweetContainer);

  //                         let tweetDiv = document.createElement('div');
  //                         console.log(html);

  //                         tweetDiv.innerHTML = html;
  //                         // console.log(tweetLi);
  //                         tweetContainer.append(tweetDiv);

  //                     })

  //                 }}
  //                     ).catch((error) => {console.error('Error fetching embed html', error);}

  //             ).catch( error => console.error('Error fetching tweet ID', error) )

}); // end doc ready

