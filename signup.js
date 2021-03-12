var user = [];
window.onload = function () {
    var form = document.getElementById("form1");
    form.addEventListener("submit", checkForm);
   
}

function checkForm(e) {
    e.preventDefault();
    var namemsg = document.getElementById("namemsg")
    var companymsg = document.getElementById("companymsg")
    var passmsg =  document.getElementById("passmsg")
    var emailmsg = document.getElementById("emailmsg")
    var weburlmsg = document.getElementById("weburlmsg")

    namemsg.innerHTML = "";
    companymsg.innerHTML = "";
    passmsg.innerHTML = "";
    emailmsg.innerHTML = "";
    weburlmsg.innerHTML = "";

    var name = document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var company = document.getElementById("company").value;
    var weburl = document.getElementById("weburl").value;
    var pass = document.getElementById("pass").value;
    //console.log(name, email, company, weburl, pass)

    var emailcheck = emailtag(email);
    var weburlcheck = weburltag(weburl);

    if(name == "") {
        namemsg.innerHTML = `Please enter your full name`
        namemsg.setAttribute("class", "msgbox")
        namemsg.style.color = "red"
    }else {
        var namecheck = true;
    }
    if(email == "" || emailcheck == false) {
        emailmsg.innerHTML = `Please enter valid email address`
        emailmsg.setAttribute("class", "msgbox")
        emailmsg.style.color = "red"
    }

    if(company == "") {
       companymsg.innerHTML = `Please enter your company name`
       companymsg.setAttribute("class", "msgbox")
       companymsg.style.color = "red"
    }else {
        var companycheck = true;
    }

    if(weburl == "" || weburlcheck == false) {
        weburlmsg.innerHTML = `Please enter a valid web url`
        weburlmsg.setAttribute("class", "msgbox")
        weburlmsg.style.color = "red"
    }

    if(pass == "" || pass.length<8) {
       passmsg.innerHTML = `Your Password must include at least 8 characters`
       passmsg.style.color = "red"
       passmsg.setAttribute("class", "msgbox")
    }else {
        var passcheck = true
    }
    console.log(emailcheck, weburlcheck, namecheck, companycheck, passcheck)
    if(emailcheck == true && weburlcheck == true && namecheck == true && companycheck == true && passcheck == true) {
        storeLocal(name, email, company, weburl, pass)
    }
}

function emailtag(mail) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(mail.match(mailformat))
    {
        return true
    }else{
        return false
    }
}

function weburltag(str)
{
 var urlformat =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (urlformat.test(str))
        {
            return true;
        }else{
            return false;
        }
}

function storeLocal(name, email, company, weburl, pass) {
    console.log(name, email, company, weburl, pass)
    var obj = {
        name: name,
        email: email,
        company: company,
        weburl: weburl,
        password: pass
    }
    user.push(obj);
    var newobj = JSON.stringify(user)
    localStorage.setItem("localuser", newobj);
    location.assign("demo.html")
}


