$(()=>{
    $('#slideUp').click(()=>{
        $('#slide').slideUp(2000);
    })


    $('#slideDown').click(()=>{
        $('#slide').slideDown(2000);
    })

    $("#slideToggle").click(()=>{
        $("#slide1").slideToggle(2000);
    })

    $("#animate").click(()=>{
        $("#move, #img1, #demo").animate({
            left: "500px",
            top: "-100px",
            height: "350px",
            width: "350px",
            fontSize: "40px"
        }, 5000)
    });

    $("#stop").click(()=>{
        $("#move, #img1, #demo").stop();
    })
})