//document.addEventListener("DOMContentLoaded", function(event) { });
//for equivalent of $(()=>{}); on jquery

//document.ready basically
$(()=>{
      
   /**
    * Solution 1 -- to-Do List
    * 
    */
   //structure of list
   /* <ul id="tasks" class="list-group">
      <li class="list-group-item">Task 1 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
      ...
   </ul> */

   let tasks = document.getElementById("tasks");
   let filter = document.getElementById("filter");
   let tasksList = [];

   //create an Array from the current tasks, so we can manipulate it.
   let buttonIndex = 0;
   for(let li of tasks.children){
      tasksList.push(li.textContent.slice(0,li.textContent.length - 2));

      //add extra attribute to delete button for easy remove operation
      li.children[0].setAttribute('indexOnli', buttonIndex);
      
      buttonIndex++;
   }
   //console.log(tasksList);


   //delete children from tasks list
   function removeTask(element){
      //console.log(element.parentNode.parentNode.children);
      //let index1 = Array.from(element.parentNode.parentNode.children).indexOf(element.parentNode);
      tasks.removeChild(element.parentNode);

      //var index = 0;
      //while( element.parentNode.previousSibling != null ){index++;}
      
      console.log(element.getAttribute('indexOnli'));
      tasksList.splice(element.getAttribute('indexOnli') ,1);
   }


   //delete tasks listener
   //get current tasks delete butons and add the event listener
   document.querySelectorAll(".delete").forEach(ele =>{
      ele.addEventListener("click", ()=> removeTask(ele));
   })

   //addForm
   /*
   <form id="addForm" class="form-inline mb-3">
         <input type="text" class="form-control mr-2" id="task">
         <input type="submit" class="btn btn-dark" value="Submit">
         </form>
   */

   let addForm = document.getElementById("addForm");
   addForm.addEventListener("submit", (e) => {
      e.preventDefault();

      //<li class="list-group-item">Task 4 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
      let button = document.createElement("button");

      button.classList.add("btn", "btn-danger", "btn-sm", "float-right", "delete");
      button.textContent = "X";
      button.addEventListener("click", ()=> removeTask(button));
      button.setAttribute('indexOnli', tasksList.length);

      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = document.getElementById("task").value + " ";

      li.appendChild(button);
      tasks.appendChild(li);

      tasksList.push(document.getElementById("task").value )

      //clear input field
      document.getElementById("task").value = "";
      
   });



   //filter tasks
   //<input type="text" class="form-control" id="filter" placeholder="Search Tasks...">
   filter.addEventListener("input", e =>{

      let indexOnli =[];

      //filter tasks array with search parameter
      let foundTasks = tasksList.filter((task, index)=>{
         if(task.includes(e.target.value)){
               indexOnli.push(index);
               return true;
         }
         
      })

      //clear current tasks Dom list
      tasks.innerHTML = "";

      //create new DOM list with filtered arraylist
      foundTasks.forEach((task, i)=>{
         let button = document.createElement("button");

         button.classList.add("btn", "btn-danger", "btn-sm", "float-right", "delete");
         button.textContent = "X";
         button.setAttribute('indexOnli', indexOnli[i]);
         button.addEventListener("click", ()=> removeTask(button));
         console.log(indexOnli[i]);
      
         let li = document.createElement("li");
         li.classList.add("list-group-item");
         li.textContent = task + " ";
      
         li.appendChild(button);
         tasks.appendChild(li);
      })
   })


   /**
    * Solution 2 -- Seashore Supplies
    * 
    */

   //1. The tourist enters the name of the rental item  in the textbox  and clicksAdd Item Button, if duplicate generate alert
   //<input type="text" name="item" id="item" size="30" /><br><br>
   //<input type="button" id="addbtn" value="Add Item" />
   //
   let addBtn = document.getElementById('addbtn');
   let item = document.getElementById('item');
   
   let selectBox = document.getElementById('selectedItems');


   addBtn.addEventListener('click', ()=>{
      let requestedItem = item.value.trim();
      let duplicate = false;
      
      //check for duplicates
      Array.from(selectBox.options).forEach(option=>{
         if(requestedItem == option.value.trim()){
            duplicate = true;
         };
      });


      if(requestedItem == '' || requestedItem == null || duplicate){
         alert('Please enter a new item in the input field, do not duplicate please.')
      }else{
         //create option and append
         let option = document.createElement('option');
         option.value = requestedItem;
         option.textContent = requestedItem;

         selectBox.append(option);
         item.value = "";
      }

   })



   //2. The tourist can delete the item  by selecting  the item  from  select box and clicking Delete Item Button.
   //<input type="button" id="removebtn" value="Delete Item" /><br></br>
   let removeBtn = document.getElementById('removebtn');

   removeBtn.addEventListener('click', ()=>{
      let selected = selectBox.selectedIndex;
      if(selected != -1){
         selectBox.options.remove(selected);
      }else{
         alert('OOPS!! There are no items to delete selected');
      }
      
   });

   //3. minutes calculation
   let minutes = document.getElementById('minutes');
   // 40 dollars per hour plus 1 for every extra minute

   minutes.addEventListener('blur', (e)=>{
      let mins = e.target.value;
      let hours = Math.floor(mins/60);
      let extraMins = mins % 60;
      //console.log(hours, extraMins);
      document.getElementById('amount').value = (hours*40 + extraMins) * selectBox.options.length;
   })


   /**
    * Solutionn 3 -- Changing Quotes
    * 
    */
   let quotes = [
      "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
      "Do what you can, with what you have, where you are. - Theodore Roosevelt",
      "There is no greater agony than bearing an untold story inside you. - Maya Angelou",
      "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
      "We accept the love we think we deserve. - Stephen Chbosky",
      "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
      "No one can make you feel inferior without your consent. - Eleanor Roosevelt",
      "Be yourself; everyone else is already taken. - Oscar Wilde",
      "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston S. Churchill",
      "If my life is going to mean anything, I have to live it myself. - Rick Riordan",
      "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet? - L.M. Montgomery",
      "You can't stay in your corner of the Forest waiting for others to come to you. You have to go to them sometimes. - A.A. Milne",
      "Pain is inevitable. Suffering is optional. - Haruki Murakami",
      "Always do what you are afraid to do. - Ralph Waldo Emerson",
      "Our lives begin to end the day we become silent about things that matter. - Martin Luther King Jr.",
      "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
      "Talent hits a target no one else can hit. Genius hits a target no one else can see. - Arthur Schopenhauer",
      "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.. - John Milton",
      "Fantasy is hardly an escape from reality. It's a way of understanding it. - Lloyd Alexander",
      "Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering. - Paulo Coelho",
      "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
      "I can be changed by what happens to me. But I refuse to be reduced by it. - Maya Angelou",
      "Never let your sense of morals prevent you from doing what is right. - Isaac Asimov",
      "Hell is empty and all the devils are here. - William Shakespeare",
      "Turn your wounds into wisdom. - Oprah Winfrey"      
    ]

   function DisplayQuotes(){
   //creates 4 random numbers between 0 and 24,
   let randoms = [];

   for(let i = 0; i < 4; i++){
      let ran = Math.floor(Math.random()* quotes.length);
      let duplicate = false;

      //check for duplicates
      randoms.forEach(a =>{
         a == ran ? duplicate = true : null;
      })

      duplicate ? i-- : randoms.push(ran);
   }
   
   let displayQ = document.getElementById('displayQuotes');
   displayQ.textContent = "";
   
   randoms.forEach((a) =>{
      displayQ.innerHTML += quotes[a] + "<br/>";
   })
   


   
   }
   //create interval
   let myInterval = setInterval(DisplayQuotes, 5000);
   //clearInterval(myInterval);
   


   /**
    * Solution 4 -- Animated Images
    * 
    */
   let imgSrc = [
      "images/img0.png", "images/img1.png", "images/img2.png",
      "images/img3.png", "images/img4.png", "images/img5.png",
      "images/img6.png", "images/img7.png", "images/img8.png",
      "images/img9.png", "images/img10.png", "images/img11.png",
      "images/img12.png", "images/img13.png"
   ]

   let imgArray = new Array();
   //caching images into an array
   imgSrc.forEach(src=>{
      let img = new Image();
      img.src = src;
      img.id = 'animateImage';
      img.alt = 'Animate Images.';
      imgArray.push(img);
   })

   let next = 0;
   function AnimateImages(){
      let animateImgFrame = document.getElementById('animateImage');

      animateImgFrame.parentNode.replaceChild(imgArray[next], animateImgFrame);
      next ==13? next = 0 : next++;
   }

   //animate it
   let myImageAnimation = setInterval(AnimateImages, 150);
   //clearInterval(myImageAnimation);




   /**
      * Solution 5 --Slide Show
      * too much of a hassle to do it in JS, will do jquery
      */

   //says to do it on slide div, but it was an img, modified the html so slide is the actual div. and img is inside.
   //get image list
   let list = $("#slides");
   let caption = $("#caption");
   let main_image = $("#slide")
   let imageArray = [];
   let captionArray = [];
   let srcArray = [];

   //looping
   list.children().each((index, element)=>{
      //console.log(element); this is html element
      let title = $(element).attr("alt");
      let imgSrc = $(element).attr("src");
      captionArray.push(title);
      srcArray.push(imgSrc);
      imageArray.push($(element));
   })

   //experimental after saving data eliminate non needed so only one image is usable on slides
   list.html('<img src="images/casting2.jpg" alt="" height="200px">')
   list.hide();
   list.children().first().show();


   let slideIndex = 0;
   let slideActive = true;
   function SlideShow(){
      $("#slide, #slides").toggle(1000);
      caption.text(captionArray[slideIndex]);
      
      slideIndex == imageArray.length -1 ? slideIndex = 0 : slideIndex++;
      caption.text(captionArray[slideIndex]);
      if(slideActive){
         list.children().first().attr("src", srcArray[slideIndex]);
         slideActive = false;
      }else{
         main_image.children().first().attr("src", srcArray[slideIndex]);
         slideActive = true;
      }
      
      //console.log(slideIndex);
   }

   let mySlideAnimation = setInterval(SlideShow, 2000);
   //clearInterval(myImageAnimation);



   /**
    * Solution 6 -- Bouncing Balls  ----- Optional
    * 
    */
   function BouncingBall(){

      $("#ballElement, #ballImage").animate({
         left: $( window ).width() - 50,
         top: "0px",
     }, 300)

     $("#ballElement, #ballImage").animate({
         left: $( window ).width() - 50,
         top: $( window ).height() - 50,
      }, 300)

      $("#ballElement, #ballImage").animate({
         left: 0,
      }, 300)
      $("#ballElement, #ballImage").animate({
         left: 0,
         top: 0,
      }, 300)
   }

   let bowlingAnimation = setInterval(BouncingBall, 50);




   /**
    * Solution 7 -- Moving Helicopter ----- Optional
    * 
    */

    function MovingObject(){
      
      $("#movingObject, #aero").animate({
         left: '0px',
         top: $( window ).height() - 200,
     }, 1)
      

      $("#movingObject, #aero").animate({
         left: $( window ).width() - 200,
         top: "0px",
     }, 700)

     
   }

   let movingHelicopter = setInterval(MovingObject, 100);


 });
 

