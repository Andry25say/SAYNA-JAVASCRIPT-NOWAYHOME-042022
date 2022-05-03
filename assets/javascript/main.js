let boutons1 = document.querySelector(".button1");
boutons1.addEventListener("mouseover",effetHover1);
function effetHover1(){

    let css = boutons1.style;
    css.backgroundColor = "#b11313";
    css.color = "#ffffff";
    css.fontWeight = "bold";
    css.boxShadow = "5px 0px 25px #ffffff";
}
boutons1.addEventListener("mouseout",effetHover2);
function effetHover2(){
    boutons1.style.backgroundColor = "#ffffff";
    boutons1.style.color = "#b11313";
    css.fontWeight = "medium";
}

let boutons2 = document.querySelector(".button2");
boutons2.addEventListener("mouseover",effetHover3);
function effetHover3(){
    boutons2.style.backgroundColor = "#b11313";
    boutons2.style.color = "#ffffff";
    boutons2.style.boxShadow = "5px 0px 25px #ffffff";
}
boutons2.addEventListener("mouseout",effetHover4);
function effetHover4(){
    boutons2.style.backgroundColor = "transparent";
    boutons2.style.color = "#b11313";
}
$(document).ready(function(){
    $(".media img").mouseover(function(){
        $(this).css("backgroundColor","#ffffff");
    })
    $(".media img").mouseout(function(){
        $(this).css("backgroundColor","#b11313");
    })
    // ....................///////.....................
    $(".menu a").mouseover(function(){
        $(this).css("borderBottom","1px solid #ffffff");
    })
    $(".menu a").mouseout(function(){
        $(this).css("borderBottom","none");
    })
      // ....................///////.....................
    $("h1").fadeIn()
})

  
