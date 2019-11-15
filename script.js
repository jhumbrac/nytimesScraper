
$("button").on("click", function() {
    var apik = "&api-key=XjP2g5X92Dq8emko8OSNj1BSqVFohqJ0";
    var search = "q=" + $("#search").val();
    var syear = $("#start").val();
    var eyear = $("#end").val();
    var dRange = "&begin_date=" + syear + "0101&end_date=" + eyear + "1231";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + search + dRange + apik;
    $.ajax({
      url: queryURL,
      method: "GET",
    })
      .then(function(response) {
        console.log(response);
      });
  });
