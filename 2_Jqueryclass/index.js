//$(document).ready(()=>{})
//shorthand for document ready
$(()=>{
    let element = $('ul.category');

    console.log(element); //object collection
    console.log(element.get()); //actual array
    console.log(element.parent().get());
    console.log(element.children().get());
    console.log(element.children().first().get());
    console.log(element.children().last().get());
    console.log(element.children().eq(1)); //element at particular index
})