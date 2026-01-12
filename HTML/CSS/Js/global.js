////////////////////////////
///Theme-toggle:
///////////////////////////
const btn=document.querySelector('.theme-toggle')
btn.addEventListener('click',()=>{
    document.body.classList.toggle("darkmode")
})
///////////////////////////////
////hamurgur menu
//////////////////////////////

const navbar =document.querySelector('.links')

function opensidebar(){
navbar.classList.add('show')

}

function closesidebar(){
navbar.classList.remove('show')

}

///////////////////////////
////Progress-bars
///////////////////////////

let boxes=document.querySelectorAll(".box");
window.onload=function(){
    setTimeout(()=>{
   load_bars();
    })
 
}
function load_bars(){
    boxes.forEach(box=>{
      let line=box.querySelector(".line")
      let increase_percent=box.querySelector(".increase_percent")
      let total_percent=box.querySelector(".total_percent")

      let p=0;
      let my_interval=setInterval(()=>{
      p++;
     line.style.width= p +"%";
     increase_percent.innerHTML= p +"%";
     if(increase_percent.innerHTML==total_percent.innerHTML){
          clearInterval(my_interval);
     }
      },25)
    });
}


///////////////////////////////////
////////contact formulair
///////////////////////////////////

function validation(){
 var name=document.getElementById("name3").value;
 var email=document.getElementById("email1").value;
 var message=document.getElementById("message").value;
 var error=document.getElementById("error_message");
 var text;

  error.style.padding="0.9rem";

  if(name.length<3){
    text="please eneter a name btween 5-8 characters"
    error.innerHTML=text;
    return false;
  }

    if(email.indexOf("@")==-1 ||email.length <6){
    text="please eneter a valid email"
    error.innerHTML=text;
    return false;
  }

  if(message.length <=140){
     text="please eneter more than 140 characters"
    error.innerHTML=text;
    return false;
  }
  alert("Form submitted seccessfully")
return true;
}

///////////////////////////////////////
////stopping submit from refreshing
//////////////////////////////////////

let refresh=document.querySelector(".form")
refresh.addEventListener("submit",(e)=>{
 e.preventDefault();
});

//////////////////////////
///pause infinite scroll
//////////////////////////

const carousel=document.querySelector('.carousel')
const group=document.querySelector('.group')

carousel.addEventListener('mouseenter',()=>{
    group.style.animationPlayState='paused';
});

carousel.addEventListener('mouseleave',()=>{
    group.style.animationPlayState='running';
});
////////////////////////
////to the top button
////////////////////////

let totop=document.getElementById('totop')
totop.style.display='none';
window.addEventListener('scroll',()=>{
    if(this.scrollY>500){
        totop.style.display='block'
    }else{
        totop.style.display='none'
    }
})
totop.onclick=function(){
    window.scrollTo({
        top:0,
        behaviour:'smooth'
    })
}

