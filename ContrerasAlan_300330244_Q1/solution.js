//create the document ready stuff, Everything Done, thank you!
$(document).ready(()=>{
  //Alan Contreras - 300330244


  //Answer 1
    //a- Write  a script to animate  the top-level  heading  <h1> with  id="facts"  by clicking  on it. 
    //Increase the font  size  to 600% and opacity  to 1 and move  the left  property 250 pixels  to the right
    $('#facts').click(()=>{

      $("#facts").animate({
        fontSize: "600%",
        opacity: "1",
        left: $("#facts").position().left + 250,
      }, 300)
    });

    //b- Change  the effects  for the <h2> headings  so that if  the user clicks  on an <h2> element, 

    let h2s = document.querySelectorAll("h2");
    
    h2s.forEach(ele=>{
      ele.addEventListener("click", (e)=>{
        console.log(e.target);

        //toggle the show or hide
        $(e.target.nextElementSibling).toggle();

        //hide image
        $('#image').hide();


        
        //change image from plus to minus
        // h2.minus {
        //   background: url(images/minus.png) no-repeat left center;
        // }
        $(e.target).toggleClass("minus");

        //the text color of list  itemswithin  the div element’s  <ul> childchanges to red and the boldstyle  applies  to list  items.
        //❖If the user clicks  on the <h2> heading  again,  the process is reversed.
        if($(e.target.nextElementSibling).children().first().css('color') != 'red'){
          $(e.target.nextElementSibling).children().first().css('color', 'red');
        }else{
          $(e.target.nextElementSibling).children().first().css('color', 'black')
        }

        
      });

    })

    //If the  user clicks  on the  link,  an image  for the sport is displayed  to the right  of the  list.
    //(This  should  also set the height  and width  of the image. (Use width:  450, height:  300

    let imageLinks = document.querySelectorAll("a");

    imageLinks.forEach(ele =>{
      ele.addEventListener("click", (e)=>{
        e.preventDefault();
        $("#image").show();

        let imgSrc = $(e.target).attr("href");

        $("#image").attr("src", imgSrc);
        $("#image").attr("width", "450px");
        $("#image").attr("height", "300px");

      })
    })
    
    
    
    

  //Answer 2

  //Write  a script for theUrban Stems Flowers.
  //The customer  enters the First Name and Last Name and then,enter the orderdetails:
  //•Theradio buttons allow  customers  to select exactly  one type of occasion, such as Birthday,  Congratulations, Thank You, etc

  let placeorder = document.getElementById('placeorder');
  let order = document.getElementById('order');

  placeorder.addEventListener('click', (e)=>{
    let message = 'Thank You ';
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let ocassion = document.querySelector("input[name=occasion]:checked").value;
    let extras = [];

    message += fname.value + " " + lname.value + " for placing an order with us." + "</br>Your Order Details are: </br>"
              + "The occasion is: " + ocassion + "</br>" + "The extra touches are: </br>";

    //type="checkbox" name="extratouches"

    let extratouches = document.querySelectorAll('[name="extratouches"]');
    //console.log(extratouches);

    extratouches.forEach((ele)=>{
      if(ele.checked){
        message += ele.value + "</br>";
      }
    });

    

    order.innerHTML = message;

  });

  

  //id="order" show details here.
  //Answer 3

  //Code a function  called  changePageColor()  that  will  change  the page’s  background  color randomly 
  //based  on  an  array  of  the  following  seven  colors
  //Use the setInterval()  function  to dynamically  set the  page background color 
  //by repeatedly  executing  the changePageColor()  function  every  1seconds (i.e., 1000 milliseconds). 
  //Hint:  use style.backgroundColor  with  the body element.(20 Marks)Sample Screenshot:

  let colorArray = [
    "#5CDB95",
    "#AFD275",
    "#66FCF1",
    "#A8D06E",
    "#F5E6CC",
    "#E6DB6A",
    "#A9DACD",
  ];

  function changePageColor(){
    let random = Math.floor(Math.random()* colorArray.length);
    document.querySelector('body').style.backgroundColor = colorArray[random];

  }

  let myInterval = setInterval(changePageColor, 1000)

  

})


