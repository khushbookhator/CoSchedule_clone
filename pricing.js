let count=0
function submit()
{
    let a=document.createElement("h1")
    let b=document.createElement("p")
    count++
    if(count%2==0)
    {
      document.getElementById("price").innerHTML=null
      document.getElementById("price").appendChild(a)
      document.getElementById("price").appendChild(b)
      a.innerHTML="$29"
      b.innerHTML="Billed Monthly"
    }
    else
    {
        document.getElementById("price").innerHTML=null
        document.getElementById("price").appendChild(a)
        document.getElementById("price").appendChild(b)
        a.innerHTML="$39"
        b.innerHTML="Billed Annually"
      }
}
