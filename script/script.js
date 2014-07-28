$(document).ready(function(){

var tumblrAPI = "http://api.tumblr.com/v2/blog/theworkdayrelease.tumblr.com/posts?api_key=QLsxt7OS0goMSjkvah9Xys4dHacGDArTyPZ3merghVWrp03YtH"

$.getJSON( tumblrAPI, function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

});