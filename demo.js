var date;
var slot;

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

timeIn = (event) => {
    let arr = ['12:00am', '12:15am', '12:30am', '12:45am', '1:00am', '1:15am', '1:30am', '1:45am', '2:00am', '2:15am', '2:30am', '2:45am','3:00am', '3:15am', '3:30am', '3:45am','4:00am', '4:15am', '4:30am', '4:45am','5:00am', '5:15am', '5:30am', '5:45am','6:00am', '6:15am', '6:30am', '6:45am', '7:00am', '7:15am']

     date=event.target.innerText
    
    let bottom =  document.getElementById('bottom')
    let left = document.getElementById("left")
    let right = document.getElementById('right')
    let rightnew = document.getElementById('result')
    document.getElementById('result').innerHTML = ""

    bottom.style.width = "75%"
    left.style.width = "25%"
    right.style.width = "40%"
    rightnew.style.width = "30%"
    rightnew.style.paddingTop = "12%"
    rightnew.style.overflowY = "scroll"
    
    rightnew.innerText = ""
    for(var i=0; i<30; i++) {
        var btns = document.createElement('div')
        btns.style.display = "flex"
        var btnsT = document.createElement('button')
        var btnsC = document.createElement('button')
        btnsT.setAttribute('name', `${arr[i]}`)
        btnsT.setAttribute('class', `subs`)
        btnsT.innerText = `${arr[i]}`
       
        rightnew.appendChild(btns)
        btns.appendChild(btnsT)
        btns.appendChild(btnsC)
        btnsC.style.display = "none"
        btnsC.style.width = "20%"

        btnsT.addEventListener('mouseover', function(event){
            event.target.style.border = "2px solid rgb(17, 162, 247)"
        })
        btnsT.addEventListener('mouseout', function(event) {
            event.target.style.border = "2px solid #c4e9ff"
        })
        btnsT.addEventListener('click', askConfirm)
        btnsC.addEventListener('click', confirmed)
    }
    bottom.append(rightnew)   
}
function askConfirm(event) {
    event.target.style.background = "grey"
    event.target.style.width = "40%"
    event.target.style.color = "white"
    event.target.style.border = "1px solid grey"
     slot=event.target.name 
    event.target.nextSibling.style.display = "block"
    event.target.nextSibling.style.width = "40%"
    event.target.nextSibling.style.height = "50px"
    event.target.nextSibling.style.background = "rgb(17, 162, 247)"
    event.target.nextSibling.style.marginLeft = "5px"
    event.target.nextSibling.style.marginTop = "5px"
    event.target.nextSibling.style.borderRadius = "5px"
    event.target.nextSibling.style.border = "none"
    event.target.nextSibling.style.color = "white"
    event.target.nextSibling.style.fontSize = "14px"
    event.target.nextSibling.style.fontWeight = "700"
    event.target.nextSibling.innerText = "Confirm"
} 
function confirmed(event) {
    event.preventDefault()
    let url = ('confirming.html?')
    var monthv = document.getElementById('mar').textContent
    let params = new URLSearchParams()
    params.append('month', `${monthv}`)
    params.append('date', `${date}`)
    params.append('slot', `${slot}`)
    window.location.assign(url + params.toString())

}





