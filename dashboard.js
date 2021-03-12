window.onload = () => {
    let data = localStorage.getItem('localuser')
    data = JSON.parse(data)
    console.log(data)
    localnm = data[0].name
    console.log(localnm)
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