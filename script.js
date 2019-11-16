
$("#submitBtn").on("click", function(event) {
  event.preventDefault();
  var apik = "&api-key=XjP2g5X92Dq8emko8OSNj1BSqVFohqJ0";
  var search = "q=" + $("#search").val().trim();
  var syear = $("#start").val().trim();
  var eyear = $("#end").val().trim();
  var dRange = "&begin_date=" + syear + "0101&end_date=" + eyear + "1231";
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + search + dRange + apik;
  $.ajax({
    url: queryURL,
    method: "GET",
  })
    .then(function(response) {
      var articlesReturn = response.response.docs;
      var selectVal = $('#numbers').val();
      $('#articles').html('').append( $('<h2 id="searchHeader">Search Parameters</h2>') );
      console.log(response);
      console.log(selectVal);
      
      for ( var i = 0; i < selectVal; i++){
        console.log(response);
        console.log('i', i);
        var a = $('<article>');
        var b = $('<h3>').text(articlesReturn[i].headline.main);
        var c = $('<h4>').text(articlesReturn[i].byline.original);
        var d = $('<p>').attr('class', 'date').text(articlesReturn[i].pub_date);
        var e = $('<p>').text(articlesReturn[i].abstract);
        var f = $('<a>').attr('href', articlesReturn[i].web_url).attr('class', 'cta').attr('target', '_blank').text('Read more');
        a.append(b);
        a.append(c);
        a.append(d);
        a.append(e);
        a.append(f);
        $('#articles').append(a);
      };
    });
});
