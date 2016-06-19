"use strict";


var params = {
  q: "Elvis", 
  part: 'snippet', 
  key: "AIzaSyC35BPW7bRtEl8Pb47Wr-7FtxEc3XUBYtk"
};

var url = "https://www.googleapis.com/youtube/v3/search";

$.getJSON(url, params, function(data) {

    //for (var y = 0; y < 5; y++) {
      //var line = data.items[y].snippet.channelTitle;
      //console.log(line);
      //$('#search-results').append('<p>Test Case 1: ' + line + '</p>');  
    //}
    $('#search-results').append('<p>Test Case 2:' + data + '</p>');
    //$('#search-results').html('<p>' + line + '</p>');
    //var results = $.each(data.items, function(index,value){
    //$('#search-results').html('<p>' + results + '</p>');
    //});
    console.log(data);

    for(var item in data) {
      $('#search-results').append('<p>' + item + ": " + data[item] + '</p>');

    }



    //});



  });




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















