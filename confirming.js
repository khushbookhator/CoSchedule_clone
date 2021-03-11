function addnum() {
    let nums = +91
    let val = document.getElementById('con').value
    if(val == "") {
        val = nums
    }
}
window.onload=()=>{
    var url= window.location
    var params=new URLSearchParams(url.search)
    var d=params.get('date')
   // var m=params.get('month')
   // var s=params.get("slot")
    var  para=document.getElementById("booking")
      // para.innertext=`${s}, ${d}, ${m}`
    console.log(d)

}