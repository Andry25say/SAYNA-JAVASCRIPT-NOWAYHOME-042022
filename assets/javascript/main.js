
/*effet hover des boutons1*/
$(document).ready(function(){
    $(".button1").hover(function(){
        $(this).css({
            "backgroundColor" : "#b11313",
            "color" :"#ffffff",
            "boxShadow":"0 0 25px #ffffff"
        })
    },
    function(){
        $(this).css({
            "backgroundColor" : "#ffffff",
            "color" :"#b11313",
            "boxShadow":"none"

        })
    }
    )
/*effet hover des boutons2*/
$(".button2").hover(function(){
    $(this).css({
        "backgroundColor" : "#b11313",
        "color" :"#ffffff",
        "boxShadow":"0 0 25px #ffffff"
    })
},
function(){
    $(this).css({
        "backgroundColor" : "transparent",
        "color" :"#b11313",
        "boxShadow":"none"
    })
}
)
   // ....................///////.....................
   $(".menu a").mouseover(function(){
    $(this).css({
        "borderBottom":"1px solid #ffffff",

    });
    
})
$(".menu a").mouseout(function(){
    $(this).css("borderBottom","none");
})
  // ....................///////.....................
/*effet survol sur les medias*/
$(".mediasociaux").hover(function(){
$(this).css("color","white")
},
function(){
$(this).css("color","black")
}
)

/* l'effet fade in du titre */
  $("h1 .titre").first().animate({
      left:200
  })

});

  
