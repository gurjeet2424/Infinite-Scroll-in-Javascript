# Infinite-Scroll-in-Javascript
This is an infinite scroll of images which enables the user to download different images.

# Setting up of Project
The project is set up simply by HTML and CSS.
Download your favourite loader from www.loading.io and save it to your root directory.
To upload loader into your project, use div tag and img tag. Your loader should be in svg format.
With the help of CSS, adjust its position, background, size, margin.
Download your favicon directly from www.favicon.io and save it with name 'favicon.png'to your root directory.
To upload favicon use <link rel = 'shortcut icon' type = image/png href = 'favicon.png'>
Make another division (image-container) for infinite images and using CSS style it according to your needs.

# Adding functionality using Javascript

## Fetching Images
On www.unsplash.com/documentation , create your account and make your first application. Name it and save it.
This will provide you your access key which is used in the API URL. The link used for API is:
https://api.unsplash.com/photos/random/?client_id=Your access key
Now use fetch method (try and catch statement) to fetch images from unsplash.com.
Use count method to specify the number of images fetched at one time.

## Displaying Images
Each image in the json file is an object having different attributes. Using DOM elements, you can create elements and set attributes 
on each image. After that, append the whole item into image container.
The function imageLoaded is used to count the number of images loaded at one time.
This function is called on every time when an image is loaded.

## Implementing infinite scroll functionality
You can use window event listener on scroll. The new images only be fetched if you scroll on the bottom of the page.
To provide this functionality use if statement with the condition:
window.innerHeight + scrollY >= document.body.offsetHeight - 1000  
