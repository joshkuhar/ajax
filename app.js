"use strict";

$('#search-term').submit(function(event) {
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
    $('#query').val('');
});

function getRequest(searchTerm) {
    var params = {
        q: searchTerm,
        part: 'snippet',
        key: "AIzaSyC35BPW7bRtEl8Pb47Wr-7FtxEc3XUBYtk"
    };
    var url = "https://www.googleapis.com/youtube/v3/search";
    $.getJSON(url, params, function(data) {
        console.log(data);
        var results = data.items;

        for (var i = 0; i < results.length; i++) {
            showResults(results[i]);
        }


    })
}

function showResults(movie) {
    console.log(movie);
    var m = movie.snippet;
    $('#search-results').append('<div>' + '<h1>' + m.title + '</h1>' + '<p>' + m.description + '</p><iframe src="' + 'https://www.youtube.com/embed/' + movie.id.videoId + '"></iframe>' + '</div>')

}


/*
Key: AIzaSyC35BPW7bRtEl8Pb47Wr-7FtxEc3XUBYtk

$('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });

function getRequest(searchTerm){
  var params = {
    s: searchTerm,
    r: 'json'
  };
  url = 'http://www.omdbapi.com';

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
  });
  $('#search-results').html(html);
}
<a href="https://www.youtube.com/"></a>
watch?v=vGJTaP6anOU



https://www.youtube.com/watch?v=vGJTaP6anOU
*/















