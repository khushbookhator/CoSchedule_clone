function addnum() {
    let nums = +91
    let val = document.getElementById('con').value
    if(val == "") {
        val = nums
    }
}
var s
var d
var m
window.onload=()=>{
    var url=new URL(location)
    var params=new URLSearchParams(url.search)
    d=params.get('date')
    console.log(params.toString())
    m=params.get('month')
    s=params.get("slot")
    var  para=document.getElementById("booking")
     para.append(s+", "+d+"  "+m)
  console.log(s,d,m)
}

guestEmail = () => {
    event.preventDefault()
    var emd = document.getElementById('more-em')
    let btns = document.getElementById('guests')
    let lab = document.getElementById('lab')
    btns.style.display = "none"
    emd.style.display = 'block'
    lab.style.display = 'block'
}

bookingDone = () => {
    event.preventDefault()

    let nme = document.getElementById('nme').value
    let em= document.getElementById('em').value
    let con = document.getElementById('con').value
    if(nme !== "" && em !== "" && con !== "") {
        alert(`Hello ${nme}!
        Your Demo has been scheduled at ${s} on ${d} ${m}.
        You will soon receive an invite mail from Peter Pomonis(organize)`)
    }
    else {
        alert('Please fill all required fields')
    }
}