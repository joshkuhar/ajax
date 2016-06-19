"use strict";


var params = {
  q: "Elvis", 
  part: 'snippet', 
  key: "AIzaSyC35BPW7bRtEl8Pb47Wr-7FtxEc3XUBYtk"
};

var url = "https://www.googleapis.com/youtube/v3/search";

$.getJSON(url, params, function(data) {

  for (var y = 0; y < 5; y++) {
    var line = data.items[y].snippet.channelTitle;
    console.log(line);
    $('#search-results').append('<p>Test Case 1: ' + line + '</p>');
    
  }
  //$('#search-results').append('<p>Test Case 2:' + line + '</p>');
  //$('#search-results').html('<p>' + line + '</p>');
  //var results = $.each(data.items, function(index,value){
    //$('#search-results').html('<p>' + results + '</p>');
  //});
  //console.log(data.items);
  });




/*
//For exploring object
$.getJSON("https://www.googleapis.com/youtube/v3/search", {q: "Elvis", part: 'snippet', key: "AIzaSyC35BPW7bRtEl8Pb47Wr-7FtxEc3XUBYtk"}, function(data) {
  console.log(data);
  });


Key: AIzaSyC35BPW7bRtEl8Pb47Wr-7FtxEc3XUBYtk

$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    q: q,
    part: 'snippet',
    key: "AIzaSyC35BPW7bRtEl8Pb47Wr-7FtxEc3XUBYtk"
  };
  var url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + results + '</p>';
    console.log(results);
  });
  $('#search-results').html(html);
}
















function getRequest(searchTerm){
  var params = {
    part: "snippet",
    key: 'AIzaSyC35BPW7bRtEl8Pb47Wr-7FtxEc3XUBYtk',
    q: searchTerm
  };
  var url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + results + '</p>';
    console.log(response.result);
  });
  $('#search-results').html(html);
}
*/



/*
$.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    console.log(data);
  });

$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC35BPW7bRtEl8Pb47Wr-7FtxEc3XUBYtk&q=elvis', function(data){
    console.log(data);
  });

$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC35BPW7bRtEl8Pb47Wr-7FtxEc3XUBYtk&q=elvis', function(data){
    var myData = data.items;
      $.each(myData, function(index, value){
      console.log(myData[2]);
    });
  });

3
$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC35BPW7bRtEl8Pb47Wr-7FtxEc3XUBYtk&q=elvis', function(data){
    var myData = data.Search;
    $.each(myData, function(index, value){
      console.log(value.Title);
    });
  });

2
$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC35BPW7bRtEl8Pb47Wr-7FtxEc3XUBYtk&q=elvis', function(data){
  var myData = data.Search[0].Title;
  console.log(myData);
});

1
$.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    console.log(data);
  });

$('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });


*/