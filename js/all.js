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
  $('#search_google').html(`
  <script async src="https://cse.google.com/cse.js?cx=010111165996532050127:4ibtcvlyzbr"></script>
  <div class="gcse-search"></div>`)
  })