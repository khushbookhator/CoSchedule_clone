


var lastscroll = 0
    var navbar = document.getElementById("navbar")
    window.addEventListener("scroll", function(){
        var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        if(scrollTop > lastscroll){
            navbar.style.top = "-85px"
        }else {
            navbar.style.top = "0"
        }
        lastscroll = scrollTop
    })