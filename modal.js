var cross = document.getElementById('cross')
cross.addEventListener('click',closeModal)
function closeModal(){
    document.querySelector('.bg-modal').style.display = "none";
}
    document.querySelector('.bg-modal').style.display = "none";

setTimeout(()=>{
    document.querySelector('.bg-modal').style.display = "block";

},10000)

function pageChange(){
    window.location.href = "signup.html"
}
