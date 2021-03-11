window.onload=()=>{
  var element = document.createElement("div");
  element.style.background="red"
  element.style.height='20px';
  element.style.width='30px';

  
    var para = document.createTextNode('The man who mistook his wife for a hat');
    element.appendChild(para);
    document.getElementsByTagName('body')[0].appendChild(element);
  
}

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
