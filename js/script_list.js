$(function(){
  let maxposts=""
$.get("https://www.googleapis.com/blogger/v2/blogs/6854104807807729546?key=AIzaSyAae3-lpH00xoHemo_elHcve14uGyjxZ4U",function(data_mx,stats){
maxposts=data_mx.posts.totalItems
$("#maxp").html("Number of Posts= "+data_mx.posts.totalItems) 
})





// let xx=""
main_list("59","0","19")
$("#nav_list .list-group-item a").click(function(el){
  let ddd=$("#nav_list .list-group-item")
  for(let p=0 ;p < ddd.length ;p++)
  {
    ddd.eq(p).removeClass("disabled act")
  }
let ns=$(el.target).attr("start")
let nf=$(el.target).attr("finish")
main_list(maxposts,ns,nf)
$(el.target).parent().addClass("disabled act")

})
function main_list(max,start,finish)
{
  $.get("https://www.googleapis.com/blogger/v2/blogs/6854104807807729546/posts?maxResults="+max+"&key=AIzaSyAae3-lpH00xoHemo_elHcve14uGyjxZ4U",function(data,stats){
    let cont=""
    
    let id=Number(start)+1
    for(let i=start ;i<=finish ;i++){
        cont +=`<tr>
        <td scope="row"><a href="posts.html?${data.items[i].id}">${data.items[i].url}</a></td>
        <td id="tab-title" class="text-right">${data.items[i].title}</td>
        <th>`+id+`</th></tr>`
        id++
      $("#cont_tb").html(cont)

    }
  })

}
})