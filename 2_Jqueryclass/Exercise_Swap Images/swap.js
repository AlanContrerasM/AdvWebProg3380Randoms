$(()=>{
    //get image list
    let list = $("#image_list");
    let caption = $("#caption");
    let main_image = $("#main_image")

    //looping
    list.children().each((index, element)=>{
        //console.log(element); this is html element
        let title = $(element).children().first().attr("title");
        let imgSrc = $(element).children().first().attr("href");

        $(element).children().first().click((e)=>{
            e.preventDefault();
            let newElement = $(e.target);
            console.log("clicked", newElement, title, imgSrc);

            caption.text(title);
            main_image.attr("src", imgSrc);

        })

    })



})