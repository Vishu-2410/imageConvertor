// Importing the jimp module 
const Jimp= require("jimp"); 

//We will first read the JPG image using read() method. 
Jimp.read("images/img.jpg", function (err, image) { 
//If there is an error in reading the image, 
//we will print the error in our terminal 
if (err) { 
	console.log(err) 
} 
//Otherwise we convert the image into PNG format 
//and save it inside images folder using write() method. 
else { 
	image.write("images/img.png") 
} 
}) 
