
function startChat() {
    let chatlogo1 = document.getElementById("chatimg");
    chatlogo1.style.display= "none";
    document.getElementById("chatbox").style.display = "block";
    
}


function closepop() {
    document.getElementById("chatbox").style.display = "none";
    document.getElementById("chatimg").style.display = "block";
    
}

function enterdetails() {
    var email = document.getElementById("name1").value;
    var name = document.getElementById("email1").value;
    startChating(email, name)
    document.getElementById("chatbox").style.display = "none";
    document.getElementById("chatbox2").style.display = "block"
}

function startChating(name, email) {
    //console.log(email, name)
    document.getElementById("displayname").innerHTML = name;
    document.getElementById("displayemail").innerHTML = email;
}

function closechat2() {
    document.getElementById("chatbox2").style.display = "none";
    document.getElementById("chatimg").style.display = "block";
    
}

