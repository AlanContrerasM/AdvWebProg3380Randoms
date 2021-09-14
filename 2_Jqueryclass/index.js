//$(document).ready(()=>{})
//shorthand for document ready
$(()=>{
    let element = $('ul.category');

    console.log(element); //object collection
    console.log(element.get()); //actual array, without get() is a query object, so we get query functions.
    console.log(element.parent().get());
    console.log(element.children().get());
    console.log(element.children().first().get());
    console.log(element.children().last().get());
    console.log(element.children().eq(1)); //element at particular index

    element = $('#cruises');
    console.log(element.siblings().get());
    console.log(element.next());
    element.addClass('customClass');
    element.css('background-color', 'red');
    element.css({'background-color': 'red', 'color':'white', 'font-size':'24px'});

    console.log(element.html());

    element.html(element.html() + "<p>new stuff</p>");

    console.log(element.children().first().text('new text'));
})