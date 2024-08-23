"use strict";

/*    Final Project

      Author: July 10, 2024, IST239-W01, Final Project

      In the final project I will showcase my skills based on what
      I have learned during the semester. There are interactive
      elements, navigations, and a host of information about
      my projects during the semester as well as information
      on me.

      Filename:       index3.js
 */

/* page date object*/
document.addEventListener("DOMContentLoaded", () => {
    //  date variables
    let assignedDate = document.getElementById("assignedDate");
    let newDate = new Date("07/24/2024");

    //formated date
    let formatDate = newDate.toLocaleDateString("en-US",{
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    //set today's date
    assignedDate.textContent = formatDate;
});

// create slideshow for div elements

//declare variables in array

let imageFiles = [
    "bank.JPG",
    "historicsc2.jpg",
    "historicsc.jpg"
];

// set current picture index at 0
let currentPictureIndex = 0;

// reference the elements from the html document
let currentImage = document.getElementById("currentImage");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

//function to update image in the index
function updateImage(){
    //set current image to the image file array
    currentImage.src = imageFiles[currentPictureIndex];
}

// event listener for Previous button
prevBtn.addEventListener("click", function() {
    //decrement currentPicture Index by 1
    currentPictureIndex--;
    // is statement for pictures less than 0
    if (currentPictureIndex < 0) {
        //images equal images length minus 1
        currentPictureIndex = imageFiles.length - 1;
    }
    updateImage(); //update image method
});

// Event listener for Next button
nextBtn.addEventListener("click", function() {
    currentPictureIndex++; //increment currentPictureIndex by 1
    // is statement for pictures greater than or equal imageFiles length
    if (currentPictureIndex>= imageFiles.length) {
        currentPictureIndex = 0; //return currentPictureIndex to equal 0
    }
    updateImage(); //update image method
});

// Initial image load
updateImage();


