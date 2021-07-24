var count_modal = localStorage.getItem('count_modal')
if(count_modal==null){
    count_modal = 1;
}
if(count_modal%2==0){
    document.querySelector("#modal-image").src="./images_index/modal_2.png"
    document.querySelector('#modal_heading').innerHTML=`There's still time to organize<br>your marketing.`
    document.querySelector('#modal_para').innerHTML=`Bring together your emails, blog posts, events, and the rest of<br> your marketing with Marketing Calendar software from CoSchedule.`
    count_modal++
    localStorage.setItem('count_modal',count_modal)
}
else{
    document.querySelector("#modal-image").src="./images_index/ditch.png"
    document.querySelector('#modal_heading').innerHTML=`Ditch the spreadsheets for good.`
    document.querySelector('#modal_para').innerHTML=`Finally see all of your marketing in one place with marketing <br> calendar software from CoSchedule.`
    count_modal++
    localStorage.setItem('count_modal',count_modal)

}





var cross = document.getElementById('cross')
cross.addEventListener('click',closeModal)
function closeModal(){
    document.querySelector('.bg-modal').style.display = "none";
}
    document.querySelector('.bg-modal').style.display = "none";

setTimeout(()=>{
    document.querySelector('.bg-modal').style.display = "block";

},10000)

function pageChange(){
    window.location.href = "signup.html"
}
