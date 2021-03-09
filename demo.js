window.onload = function() {
    let time = document.getElementById('time')
    let current =new Date()
    time.innerHTML = `India Standard Time (${current.getHours()}:${current.getMinutes()})`
    time.style.color = "grey"
     
    let nxt = document.getElementById('next')
    nxt.addEventListener('click', showApril)

    let pre = document.getElementById('previous')
    pre.addEventListener('click', showMarch)
}
showApril = () => {
    var mar = document.getElementById('mar')
    mar.innerText = "April 2021"
    
}
