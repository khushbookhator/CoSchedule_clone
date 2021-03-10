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
    var parent = document.getElementById("cal")
    // nxt.style.border = "none"
    // parent.style.display = "none"
    parent.innerText = ""
    var mar = document.getElementById('mar')
    mar.innerText = "April 2021"
    
    for(var i=-2; i<31; i++) {    
        let divs = document.createElement('div')
        if(i>=1) {
            divs.innerText = i
        }
        if(i>=1 && i<9) {
            divs.style.background = "rgba(242,250,255,255)"
            divs.style.color = "#11a2f7"
            divs.style.fontSize = "19px"
            divs.addEventListener('click', timeIn)
            // divs.onmouseover.style.background = "#c4e9ff;"
        }else {
            divs.style.background = "none"
            divs.style.color = "black"
            divs.style.fontSize = "16px"
        }
        parent.append(divs)
    }
}
showMarch = () => {
    var parent = document.getElementById("cal")
    // parent.style.display = "none"
    parent.innerText = ""
    var mar = document.getElementById('mar')
    mar.innerText = "March 2021"
    for(var i=1; i<32; i++) {
        
        let divs = document.createElement('div')
        divs.innerText = i
        parent.append(divs)
        if(i >=13) {
            divs.addEventListener('click', timeIn)
        }
    }
}
timeIn = () => {
    
    let bottom =  document.getElementById('bottom')
    let left = document.getElementById("left")
    let right = document.getElementById('right')
    var rightnew = document.createElement('div')
    bottom.style.width = "85%"
    left.style.width = "25%"
    right.style.width = "40%"
    rightnew.style.width = "30%"
    rightnew.style.paddingTop = "12%"
    bottom.append(rightnew)
    rightnew.innerText = ""
    for(var i=0; i<30; i++) {
        var btns = document.createElement('button')
        console.log("a")
        btns.innerText = i
        
        rightnew.appendChild(btns)
        // secs.style.width = "50px"
        btns.style.border = "red"
    }
    
}
