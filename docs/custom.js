setTimeout(function(){
  var hours = new Date().getHours();

  if(hours < 7 && hours >=20){
    $("html").removeClass("rust").addClass("coal");
  }
  else{
    $("html").removeClass("coal").addClass("rust");
  }
}, 3000);


$("#content").on("touchstart", function(){
  setTimeout($("html").removeClass("sidebar-visible").addClass("sidebar-hidden"), 100);
})
