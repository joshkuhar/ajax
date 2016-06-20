"use strict";

$('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });

function getRequest(searchTerm){
    var params = {
    q: searchTerm, 
    part: 'snippet', 
    key: "AIzaSyC35BPW7bRtEl8Pb47Wr-7FtxEc3XUBYtk"
    };
    var url = "https://www.googleapis.com/youtube/v3/search";
    $.getJSON(url, params, function(data) {
      for (var y = 0; y < data.items.length; y++) {
      var line = data.items[y].snippet.thumbnails.default.url;
      showResults(line);  
      }
    }) 
  }

function showResults(results) {
  $('#search-results').append('<p><img src="' + results + '"></p>');
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
*/















