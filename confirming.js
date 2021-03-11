function addnum() {
    let nums = +91
    let val = document.getElementById('con').value
    if(val == "") {
        val = nums
    }
}
window.onload=()=>{
    var url=new URL(location)
    var params=new URLSearchParams(url.search)
    var d=params.get('date')
    console.log(params.toString())
    var m=params.get('month')
    var s=params.get("slot")
    var  para=document.getElementById("booking")
     para.append(s+", "+d+"  "+m)
  console.log(s,d,m)
}
