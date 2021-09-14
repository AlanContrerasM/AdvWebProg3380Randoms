//document.ready
$(()=>{
    $('h4').click(function(){
        alert('I am clicked')
    })

    $("#show").click(()=>{
        $("#image1").show();
    })
    $("#hide").click(hideImage);


    $("#toggle").click(()=>{
        //basically interchanging css between both
        $("#div1, #div2").toggle();
    })
});


function hideImage(){

    //$("#image1").hide()
    $("#image1").hide(2000, ()=>{
        alert("I just hid with animation, and function callback at the end");
    });
}