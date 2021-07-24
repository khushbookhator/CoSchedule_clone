


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

handleChat = () => {
    let box = document.getElementById('c-icon')
    let divs = document.getElementById('chat-box')
    box.style.display = "none"
    divs.style.display = "block"
}
minimise = () => {
    let box = document.getElementById('c-icon')
    let mini = document.getElementById('mini')
    let divs = document.getElementById('chat-box')
    divs.style.display = "none"
    box.style.display = "block"
}
