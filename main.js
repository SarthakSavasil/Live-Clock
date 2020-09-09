const time= document.getElementById('time'),
greeting=document.getElementById('greeting'),
name=document.getElementById('name'),
focus=document.getElementById('focus');

//show time
function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min= today.getMinutes(),
    sec = today.getSeconds();
    const amPm=hour>=12 ? 'PM' : 'AM';//am or pm
    hour=hour%12||12;//12 hr format

    time.innerHTML=`${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime,1000);
}
function addZero(n){
    return(parseInt(n,10)<10 ?'0':'')+n;
}
// Setting background
function setBgGreet(){
    let today = new Date(),
    hour= today.getHours();

    if(hour < 12 && hour>4){
        //it's morning
        document.body.style.backgroundImage = "url('mor.jpg')";
        greeting.textContent ='Good Morning';
        document.body.style.color='white';
    }
    else if (hour <18 && hour>12){
        document.body.style.backgroundImage = "url('after.jpg')";
        greeting.textContent ='Good AfterNoon';
    }
    else{
        document.body.style.backgroundImage = "url('n.jpeg')";
        greeting.textContent ='Good Evening';
        document.body.style.color='white';
    }
}
//run
showTime();
setBgGreet();
//get name
function getName(){
    if(localStorage.getItem('name')==null){
        name.textContent = '[Enter Name]';}
    else{
        name.textContent = localStorage.getItem('name');
    }
}
//get focus
function getFocus(){
    if(localStorage.getItem('focus')==null){
        focus.textContent = '[Enter focus]';}
    else{
        name.textContent = localStorage.getItem('focus');
    }
}
