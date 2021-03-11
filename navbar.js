// window.onscroll=function(e){
//     document.getElementById('navbar')
// }
var lastScrollTop = 0;
var navbar = document.getElementsByClassName('navbar');
window.addEventListener('scroll',function(){
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop>lastScrollTop){
        navbar.style.top="-80px"
    }else{
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})