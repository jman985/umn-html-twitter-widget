

//Twitter widget JS code - indentical to script in widget.html

let bookTitle;

if(document.title.replace(' — University of Minnesota Press','').split(':')[0]==='Leonardo'){
  bookTitle = document.title.replace(' — University of Minnesota Press','').replace(' ','').split(':')[1]
}
else{
  bookTitle = document.title.replace(' — University of Minnesota Press','').split(':')[0]
}

      fetch('/api/tweets/'+ bookTitle, 
      { method: 'GET',
        mode: 'no-cors',
                        }
      ).then( response => response.json() 
      
      ).then(data=> {
           
          for(let i=0;i<data.length;i++){
            
              fetch('/api/tweets/:title/' + data[i].tweet_id,
              { method: 'GET',
              mode: 'no-cors',
                              }

              ).then(response=> response.text()
              
              ).then(html => {
                              
                let tweetContainer = document.getElementById('viewTweets');

                let tweetDiv = document.createElement('div');

                tweetDiv.innerHTML = html;
              
                tweetContainer.append(tweetDiv);
                twttr.widgets.load(document.getElementById("viewTweets"));
        })
      }}

      ).catch((error) => {console.error('Error fetching embed html', error);}

).catch( error => console.error('Error fetching tweet ID', error) )

