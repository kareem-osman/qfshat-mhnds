let url_json=""
if (navigator.onLine==true){url_json="https://api.jsonbin.io/b/5debbbc3cb4ac6042075d3a4/3"}else{url_json="../title2.json"}
let xhr=new XMLHttpRequest
xhr.open("Get",url_json)
xhr.onload=function(){
  // ----------------------------navbar content-----
  // ----------------------------navbar content-----
  // -----------------new artical
 let title_arr=JSON.parse(xhr.response)
 let title_1=""
 let title_2=""
 let new_arr=new Array
 new_arr=title_arr[0].new_title
 for(i=0 ; i < new_arr.length ; i=i+2){
    if(title_arr[0].new_title[i]){title_1 +=`<a class="dropdown-item" href="${title_arr[0].new_title[i].link}">${title_arr[0].new_title[i].title}</a>`}
    if(title_arr[0].new_title[i+1] ){title_2 +=`<a class="dropdown-item" href="${title_arr[0].new_title[i+1].link}">${title_arr[0].new_title[i+1].title}</a>`}
    document.getElementById("left").innerHTML=title_1
    document.getElementById("right").innerHTML=title_2
 }
// -----------------pouplar artical
 let pop_1=""
 let pop_2=""
 let pop_arr=title_arr[0].poup_title
 for(i=0 ; i < pop_arr.length ; i=i+2){
    if(title_arr[0].poup_title[i]){pop_1 +=`<a class="dropdown-item" href="${title_arr[0].poup_title[i].link}">${title_arr[0].poup_title[i].title}</a>`}
    if(title_arr[0].poup_title[i+1] ){pop_2 +=`<a class="dropdown-item" href="${title_arr[0].poup_title[i+1].link}">${title_arr[0].poup_title[i+1].title}</a>`}
    document.querySelector("#popart #left").innerHTML=pop_1
    document.querySelector("#popart #right").innerHTML=pop_2
 }

//  ------------------main&side bar content--------------------------
//  ------------------main&side bar content--------------------------
//  ------------------main&side bar content--------------------------
 let enginerring_item=""
 let pmp_item=""
 let exec_item=""
 let other_item=""
 let english_item=""
 let enginerring_card=""
 let pmp_card=""
 let exec_card=""
 let other_card=""
 let english_card=""
 console.log(title_arr[0].engineering_title[0].title)
 for(let ss of title_arr[0].engineering_title)
 {enginerring_card+=`<div class="card mb-3" page="${ss.page}">
 <div class="row no-gutters">
   <div class="col-md-4">
     <img src="imges/${ss.img}" class="card-img" alt="...">
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <h5 class="card-title">${ss.title}</h5>
       <p class="card-text">${ss.body}<span><a href="${ss.link}"> See More...</a></span>
       </p>
       <p class="card-text"><small class="text-muted">Last updated ${ss.time} ago</small></p>
     </div>
   </div>
 </div>
</div>`
enginerring_item+=`<li class="sid_li text-right"><a class=" text-dark" href="${ss.link}">${ss.title}</a></li>`}
 for(let ss of title_arr[0].pmp_title)
 {pmp_card+=`<div class="card mb-3" page="${ss.page}">
 <div class="row no-gutters">
   <div class="col-md-4">
     <img src="imges/${ss.img}" class="card-img" alt="...">
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <h5 class="card-title">${ss.title}</h5>
       <p class="card-text">${ss.body}<span><a href="${ss.link}"> See More...</a></span>
       </p>
       <p class="card-text"><small class="text-muted">Last updated ${ss.time} ago</small></p>
     </div>
   </div>
 </div>
</div>`
 pmp_item+=`<li class="sid_li text-right"><a class=" text-dark" href="${ss.link}">${ss.title}</a></li>`}
 for(let ss of title_arr[0].exec_title)
 {exec_card+=`<div class="card mb-3" page="${ss.page}">
 <div class="row no-gutters">
   <div class="col-md-4">
     <img src="imges/${ss.img}" class="card-img" alt="...">
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <h5 class="card-title">${ss.title}</h5>
       <p class="card-text">${ss.body}<span><a href="${ss.link}"> See More...</a></span>
       </p>
       <p class="card-text"><small class="text-muted">Last updated ${ss.time} ago</small></p>
     </div>
   </div>
 </div>
</div>`
 exec_item+=`<li class="sid_li text-right"><a class=" text-dark" href="${ss.link}">${ss.title}</a></li>`}
 for(let ss of title_arr[0].other_title)
 {other_card+=`<div class="card mb-3" page="${ss.page}" >
 <div class="row no-gutters">
   <div class="col-md-4">
     <img src="imges/${ss.img}" class="card-img" alt="...">
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <h5 class="card-title">${ss.title}</h5>
       <p class="card-text">${ss.body}<span><a href="${ss.link}"> See More...</a></span>
       </p>
       <p class="card-text"><small class="text-muted">Last updated ${ss.time} ago</small></p>
     </div>
   </div>
 </div>
</div>`
other_item+=`<li class="sid_li text-right"><a class=" text-dark" href="${ss.link}">${ss.title}</a></li>`}
for(let ss of title_arr[0].english_title)
 {english_card+=`<div class="card mb-3" page="${ss.page}" >
 <div class="row no-gutters">
   <div class="col-md-4">
     <img src="imges/${ss.img}" class="card-img" alt="...">
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <h5 class="card-title">${ss.title}</h5>
       <p class="card-text">${ss.body}<span><a href="${ss.link}"> See More...</a></span>
       </p>
       <p class="card-text"><small class="text-muted">Last updated ${ss.time} ago</small></p>
     </div>
   </div>
 </div>
</div>`
english_item+=`<li class="sid_li text-right"><a class=" text-dark" href="${ss.link}">${ss.title}</a></li>`}

document.querySelector("#side_bar ul").innerHTML=
"<h5 id='engr'>المقالات الهندسيه</h5>"+enginerring_item +"<hr></hr>"
+"<h5 id='pmp'>مقالات ادارة المشروعات</h5>"+pmp_item+"<hr></hr>"
+"<h5 id='exeu'>مقالات الاشراف والتنفيذ</h5>"+exec_item+"<hr></hr>"
+"<h5 id='other'>موضوعات اخري</h5>"+other_item+"<hr></hr>"
+"<h5 id='english'>موضوعات باللغة الانجليزيه</h5>"+english_item

document.querySelector("#main").innerHTML=
enginerring_card +pmp_card+exec_card+other_card+english_card
// -------------------------------------------------------------
load(5)
// ----------------book main content---------------------------------------------
document.getElementById("bbok").onclick=function(){
  let book_cont=""
  for(let book of title_arr[0].book_title){
  book_cont += `<div id="book_card" class="card" style="width: 18rem;">
  <img src="../imges/${book.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${book.title}</h5>
    <p class="card-text">${book.body}</p>
    <a href="${book.link}" class="btn btn-primary">Download</a>
  </div>
</div>`
  }
  document.querySelector("#main").innerHTML=book_cont+'<button onclick="bac_btn()" id="back_btn" type="button" class="btn btn-lg btn-block">Go Block</button>'
  load(title_arr[0].book_title.length)
  document.querySelector(".navigator").style.display="none"
  }
// -------------------------------------------------------------

// -----------------------video main content--------------------------------------
document.getElementById("video").onclick=function(){
  let video_cont=""
  for(let video of title_arr[0].video_title){
    video_cont +=`<h5 id="vid_title">${video.title}</h5><iframe width="560" height="315" src="${video.link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  }
  document.querySelector("#main").innerHTML=video_cont+'<button onclick="bac_btn()" id="back_btn" type="button" class="btn btn-lg btn-block">Go Block</button>'
  
  document.querySelector(".navigator").style.display="none"
  }
// -------------------navigator bar------------------------------------------
// -------------------navigator bar------------------------------------------
let card_arr=document.querySelectorAll("#main .card")
let nav_arr=document.querySelectorAll(".navigator ul li")
for(let hhh of nav_arr){  
  hhh.onclick=function(el){ 
    for(let rrr of nav_arr){    
    rrr.children[0].classList.remove('act')}
    el.target.classList.add('act')
    for(let cc of card_arr){
      if(cc.getAttribute("page")==el.target.innerText){
        cc.style.display="block"
      }else{cc.style.display="none"}
    }
  }
}
}
xhr.send()

function load(n){
  let card_arr2=document.querySelectorAll(".card")
  for( let y=0 ; y < n ; y++){
    card_arr2[y].style.display="block"
  }
}
function bac_btn(){
  location.reload()
}
$(function(){
  $(window).scroll(function(){
        
    if($(this).scrollTop() == 0){
        $("#to_up").hide()

    }else{$("#to_up").show()
}})
$("#to_up").click(function(){
  $("html,body").animate(
      {scrollTop:0},800
  )
})
$("#to_side a").on("click",function(){
  let target=$(this).attr("href")
  $("body , html").animate({
      scrollTop:$(target).offset().top -60
  },800)
})
$("#to_main a").on("click",function(){
  let target=$(this).attr("href")
  $("body , html").animate({
      scrollTop:$(target).offset().top -60
  },800)
})

})