// Authenticate via API Key
var tumblr = require('tumblr.js');
var client = tumblr.createClient({ consumer_key: 'QLsxt7OS0goMSjkvah9Xys4dHacGDArTyPZ3merghVWrp03YtH' });

// Make the request
client.posts('theworkdayrelease.tumblr.com', { limit: 3, filter: 'html' }, function (err, data) {
    console.log(client.posts);
});















// $(document).ready(function(){

// var tumblrAPI = "http://api.tumblr.com/v2/blog/theworkdayrelease.tumblr.com/posts?api_key=QLsxt7OS0goMSjkvah9Xys4dHacGDArTyPZ3merghVWrp03YtH"

// $.getJSON( tumblrAPI, function( data ) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
 
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });

// });