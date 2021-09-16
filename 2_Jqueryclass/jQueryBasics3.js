$(()=>{
    $("#fadein").click(()=>{
        $("#fadediv").fadeIn(2000);
    });

    $("#fadeout").click(()=>{
        $("#fadediv").fadeOut(2000);
    })


    $("#show").click(()=>{
        $("#showhide").show(2000);
    });

    $("#hide").click(()=>{
        $("#showhide").hide(2000);
    })

    $("#toggle").click(()=>{
        $("#fadetoggle1, #fadetoggle2").toggle(2000);
        //$("#fadetoggle1, #fadetoggle2").fadeToggle(2000);
    })


    $("#light").click(()=>{
        $("#fadeTo").fadeTo(2000,.1);
    })

    $("#medium").click(()=>{
        $("#fadeTo").fadeTo(2000,.5);
    })

    $("#dark").click(()=>{
        $("#fadeTo").fadeTo(2000,1);
    })
})