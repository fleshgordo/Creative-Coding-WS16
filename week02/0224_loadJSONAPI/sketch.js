var searchQuery = "trump";

function setup() {
  noCanvas();
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchQuery + "&api-key=7325774b17fa420eace0388afb00b628";
  //console.log(url);
  loadJSON(url, receivedData);

}

function receivedData(data) {
  var articles = data.response.docs;
  for (var i = 0; i < articles.length; i++) {
    createP(articles[i].snippet);
    console.log(articles[i]);
  }
  //console.log(data.response.docs);
}
