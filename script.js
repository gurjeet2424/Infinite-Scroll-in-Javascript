const imagegContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let totalImages = 0;
let loadedPhotos = 0;
let ready = false;
let photoArray = [];
const count = 30;
const APIKEY = 'GrdduQoNcDr9s5koLvHJXIN6J2sTdH3nkM6CvlXJkF8';
const KEY = APIKEY;
const APIURL = `https://api.unsplash.com/photos/random/?client_id=${KEY}&count=${count}`;
// this function shows the no. of images loaded and sets the ready variable true for further fetching
function imageLoaded(){
    loadedPhotos++;
    console.log('Loaded images:',loadedPhotos);
    if(loadedPhotos === totalImages){
        ready = true;
        loader.hidden = true;
        console.log('ready = ',ready);
    }
}
// this function sets the attributes of anchor tag and image tag
function setAttributes(element,attribute){
    for(const key in attribute){
        element.setAttribute(key,attribute[key]);
    }
}
// To display 30 photos at time
function displayPhoto(){
    loadedPhotos = 0;
    totalImages = photoArray.length;
    console.log('total images:',totalImages);
    photoArray.forEach((photo) => {
// creating anchor tag to represent link on images
    const item = document.createElement('a');
    setAttributes(item, {
        href : photo.links.html,
        target : '_blank',
    });
// creating img tag on image which will take user to a large version 
    const img = document.createElement('img')
    setAttributes(img, {
        src : photo.urls.regular,
        alt : photo.alt_description,
        title: photo.alt_description,
    });
// this event is occured on loading of each image
    img.addEventListener('load',imageLoaded);
// appending image tag into achor tag 
    item.appendChild(img);
// appending anchor tag into image container
    imagegContainer.appendChild(item);
    });

}
// To fetch photos randomly from unsplash API 
async function getPhotos(){
    try{
        const response = await fetch(APIURL);
        photoArray = await response.json();
        displayPhoto();
    }catch(error){
        
    }
}
getPhotos();
// this event is occured on scrolling the window near the bottom of page
window.addEventListener('scroll',()=>{
    if(window.innerHeight + scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        getPhotos();

    }
    
});