var url="http://static.cricinfo.com/rss/livescores.xml"				//url of the RSS feed

/*
	The functionality has been implemented using Promises and Handlers.
	THe promises are nested within each other.
*/

fetch(url).then((res) => {
  res.text().then((htmlTxt) => {
    var domParser = new DOMParser()									// Instantiate a new DOM Parser object
    let doc = domParser.parseFromString(htmlTxt, 'text/html')
    ele = doc.querySelectorAll('title');							// The individual match scores are stored within the title tags
    var l= ele.length-1;											// Done to display just the top 3 matches' scores
    l=l>=3?3:l;
    var str='';
    for(var i=1;i<=l;i++){
        str+=ele[i].innerHTML;										// Extracting match info and storing in a temporary string
        str+='<br>';
    }
    var place= document.getElementById("here");						// Setting the text in the popup's HTML file 
    place.innerHTML= str;
  })
}).catch(() => {
    var place= document.getElementById("here");
    place.innerHTML="Sorry, scores aren't available at the moment."	
})