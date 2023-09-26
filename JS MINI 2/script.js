// all store variables

var container=document.querySelector("#container");
var love=document.querySelector("i");
var icon=document.querySelector("#love-icon");
var linkedin=document.querySelector("#comment");
var email=document.querySelector("#send");
var flag =0;

// in photo like
container.addEventListener("dblclick",function(){
    love.style.transform="translate(-50%,-50%)scale(1)";
    icon.style.color="#CD3691";
    flag=1;
    setTimeout(function(){
        love.style.transform="translate(-50%,-50%)scale(0)";
    },3000)
})
// turning the color of love icon red  with single click and with anither click remove like

icon.addEventListener("click",function(){
    if(flag==0){
        icon.style.color="#CD3691";
        flag=1;
    }
    else{
        icon.style.color="#000";
        flag=0
    }
// comment redirects to my linked in profile 
})
linkedin.addEventListener("click",function(){
window.location.href="https://www.linkedin.com/in/ayan-mukhopadhyay-3b9672258/";
})

// redirecting any messages to my email

email.addEventListener("click",function(){
    window.location.href="mailto:ayanmukhopadhyay885@gmail.com";
    })
