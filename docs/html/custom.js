setTimeout(function(){
  var hours = new Date().getHours();
  console.log(hours)
  if(hours < 7 || hours >=20){
    $("html").removeClass("rust").addClass("coal");
  }
  else{
    $("html").removeClass("coal").addClass("rust");
    var link = document.createElement('meta');
    link.setAttribute('theme-color', 'hsl(60, 9%, 87%)');
      document.getElementsByTagName('head')[0].appendChild(link);
  }
}, 0);


$("#content").on("touchstart", function(){
  setTimeout('$("html").removeClass("sidebar-visible").addClass("sidebar-hidden")', 100);
})
