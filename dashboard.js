window.onload = () => {
    let data = localStorage.getItem('localuser')
    data = JSON.parse(data)
    console.log(data)
    localnm = data[0].name
    console.log(localnm)
    let n = document.getElementById('username')
    n.textContent = localnm
    n.style.marginLeft = "10px"
    n.style.fontWeight = '700'
    // localem = user[0].email;
    // console.log(localem)
}


showMeNotification =() => {
    event.preventDefault()
    let not = document.getElementById('notify')
    let rec = document.getElementById('recent')
    let fav = document.getElementById('fav')
    not.style.display = "block"
    fav.style.display = "none"
    rec.style.display = "none"
}
showMeRecents =() => {
    event.preventDefault()
    let rec = document.getElementById('recent')
    let not = document.getElementById('notify')
    let fav = document.getElementById('fav')
    rec.style.display = "block"
    not.style.display = "none"
    fav.style.display = "none"
}
showMeFav =() => {
    event.preventDefault()
    let fav = document.getElementById('fav')
    let rec = document.getElementById('recent')
    let not = document.getElementById('notify')
    fav.style.display = "block"
    not.style.display = "none"
    rec.style.display = "none"
}
showUser = () => {
    let pops = document.getElementById('pops')
    pops.style.display = "block"
}
stopUser = () => {
    let pops = document.getElementById('pops')
    pops.style.display = "none"
}
document.getElementById("btn")
console.log(document.getElementById("btn"))
{/* <input type="text" id="right" name="right" oninput="left.value = right.value; return true;" /> */}