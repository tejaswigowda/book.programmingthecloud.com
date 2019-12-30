var hours = new Date().getHours();

if(hours < 7 && hours >=20){
  $("html").removeClass("rust").addClass("coal");
}
else{
  $("html").removeClass("coal").addClass("rust");
}


$("#page-wrapper").on("touchstart", function(){
  $("html").removeClass("sidebar-visible").addClass("sidebar-hidden");
})
