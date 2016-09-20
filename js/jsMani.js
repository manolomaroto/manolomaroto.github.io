function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {
    var existeCookie = getCookie("existeCookie");
    if (existeCookie != "") {
        $("#capaCookie").css("visibility","hidden");
    } else {
        
      setCookie("existeCookie", "existe", 365);
        
    }
}




$(document).ready(function(){
				$(".contentContainer").css("min-height", $(window).height());
				$("#capaCookie")
				.css("top", $(window).height() - 80)
				.css("left", $(window).width()/2);

				$("#mensajeCookie").on("click", function(){
					$("#capaCookie").fadeOut(1000);
				})
				checkCookie();
			});