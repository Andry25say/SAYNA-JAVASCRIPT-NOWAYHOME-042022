
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



    $(".media img").mouseover(function(){
        $(this).css("backgroundColor","#ffffff");
    })
    $(".media img").mouseout(function(){
        $(this).css("backgroundColor","#b11313");
    })
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
})

  
