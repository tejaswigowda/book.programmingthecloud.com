setTimeout(function(){
  var hours = new Date().getHours();
  document.querySelector("[name='theme-color']").remove()

  if(hours < 7 || hours >=20){
    $("html").removeClass("rust").addClass("coal");
    var link = document.createElement('meta');
    link.setAttribute('theme-color', 'black');
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  else{
    $("html").removeClass("coal").addClass("rust");
    var link = document.createElement('meta');
    link.setAttribute('theme-color', 'hsl(60, 9%, 87%)');
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  $($(".chapter li.spacer")[0]).prepend("<div class='partT'>Front End Web Technologies</div><br>")
  $($(".chapter li.spacer")[1]).prepend("<div class='partT'>Full Stack Programming</div><br>")
  $($(".chapter li.spacer")[2]).prepend("<div class='partT'>Programming IoT</div><br>")
  $("#sidebar-scrollbox .chapter").prepend("<div style='margin-bottom: 0; width: 100%;margin-left: 0; text-align: center;' class='partT'>Programming the Cloud</div><br>")
}, 0);


$("#content").on("touchstart", function(){
  setTimeout('$("html").removeClass("sidebar-visible").addClass("sidebar-hidden")', 100);
})





function putScriptInIframes(script, scriptId) {

   var $iframes = $('iframe');
   $iframes.each(function () {
        var thisDoc = this.contentWindow.document;
        if ( ! thisDoc.getElementById(scriptID)) {
            var scriptObj = thisDoc.createElement("script");
            scriptObj.type = "text/javascript";
            scriptObj.id = scriptId;
            scriptObj.innerHTML = script;
            thisDoc.body.appendChild(scriptObj);
        }
    });
}


 $("iframe").contents().find("body").append(decodeURI("**%3Cscript%3E** alert(2)  **%3C/script%3E**"));

