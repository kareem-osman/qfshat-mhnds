let id=location.href.split("?")
console.log(id[1])
$(function(){
$.get("https://www.googleapis.com/blogger/v3/blogs/6854104807807729546/posts/"+id[1]+"?key=AIzaSyAae3-lpH00xoHemo_elHcve14uGyjxZ4U",function(date_post){

$("#maxp").html(date_post.title)
$("title").html(date_post.title)
$("#post_cont").html(date_post.content)



})
















})