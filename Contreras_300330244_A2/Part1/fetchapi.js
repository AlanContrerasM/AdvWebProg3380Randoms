//Alan Contreras
//with jquery ajax
const resultsContainer = document.createElement('div');
resultsContainer.id = 'resultsContainer';
resultsContainer.style.marginTop = '20px';
document.getElementById('content').appendChild(resultsContainer);


document.querySelector('button').addEventListener('click', (e)=>{
    e.preventDefault();// in case it get seen as a submit
    // console.log(e);
    console.log("pressed button");
    const id = "24326252-a44aebf7e29551393fc7887c2";
    const editorsChoice = false;
    const search = document.getElementById('input1').value;
    const perPage = document.getElementById('input2').value;
    const url = `https://pixabay.com/api/?key=${id}&q=${search}&per_page=${perPage}&editors_choice=${editorsChoice}`;
    

    fetch(url)
    .then(response=>{
        if(!response.ok){
            throw Error(response.statusText);
        }
        return response.json();

    })
    .then(pictures=>{
        displayPictures(pictures.hits);
    })
    .catch((error)=>{
        console.log("Error guys: ", error);
    })

});


const displayPictures = (pictures) =>{
    //create a div for each picture
    //we want Downloads,  LargeImageURL,Image  Likes,  Tags,  Image  Type,  User  Name,  URL
    resultsContainer.innerHTML = "";

    pictures.forEach(picture => {
        const newImgDiv = document.createElement('div');
        const newImg = document.createElement('img');
        // console.log(picture.webformatURL);
        newImg.src = picture.webformatURL;

        const contentDiv =document.createElement('div');
        contentDiv.innerHTML = `
                                <h3 style='text-align:center'>Image Details</h3>
                                <p><strong>Downloads</strong>: ${picture.downloads}</p>
                                <p style='word-wrap:break-word'><strong>Large Image URL</strong>: <a href='${picture.largeImageURL}'>${picture.largeImageURL}</a></p>
                                <p><strong>Image Likes</strong>: ${picture.likes}</p>
                                <p><strong>Tags</strong>: ${picture.tags}</p>
                                <p><strong>Image type</strong>: ${picture.type}</p>
                                <p><strong>User</strong>: ${picture.user_id}</p>
                                <p style='word-wrap:break-word'><strong>URL</strong>: <a href='${picture.pageURL}'>${picture.pageURL}</a></p>
                                `;
        contentDiv.style.overflow = 'hidden';
        contentDiv.style.padding = '30px';
        contentDiv.style.backgroundColor = '#dce5ee';
        contentDiv.style.textAlign = 'left';


        newImgDiv.appendChild(newImg);
        newImgDiv.appendChild(contentDiv);

        newImgDiv.style.display = 'grid';
        newImgDiv.style.gridTemplateColumns = " 1fr 1fr";
        newImgDiv.style.padding = '20px';
        newImgDiv.style.maxWidth = '80%';
        newImgDiv.style.margin = 'auto';
        resultsContainer.appendChild(newImgDiv);


    });
}


