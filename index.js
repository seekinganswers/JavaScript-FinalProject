"use strict";

/*    Final Project


      In the final project I will showcase my skills based on what
      I have learned during the semester. There are interactive
      elements, navigations, and a host of information about
      my projects during the semester as well as information
      on me.

      Filename:       index.js
 */

// Select all elements with the class 'project-item-header'
let projectItemHeader = document.querySelectorAll(".project-item-header");

// Loop through each 'project-item-header' element
for (let i = 0; i < projectItemHeader.length; i++){
    // Add a click event listener to each 'project-item-header' element
    projectItemHeader[i].addEventListener("click", function (){

        // Toggle the 'active' class on the clicked 'project-item-header'
        this.classList.toggle("active");

        // Get the next sibling element of the clicked 'project-item-header',
        // which is assumed to be the body associated with it
        let projectItemBody = this.nextElementSibling;

        // If the 'active' class is present
        if(this.classList.contains("active")){
            // Expand the body by setting maxHeight to its scrollHeight
            projectItemBody.style.maxHeight = projectItemBody.scrollHeight + "px";
        }else{
            // Collapse the body by setting maxHeight to 0
            projectItemBody.style.maxHeight = 0;
        }
    });
}


// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function (){

    // Select all elements item
    let items = document.querySelectorAll(".item");

    // Initialize currentIndex to keep track of the slide
    let currentIndex = 0;

    // Function to show a slide in the index
    function showSlide(index){

        // Remove 'active' class hide items
        for(let i = 0; i < items.length; i++) {
            items[i].classList.remove("active");
        }
        // Add 'active' class to the item to display it in the index
        items[index].classList.add("active");
    }

    // Function to show the next slide
    function nextSlide(){
        currentIndex++;

        // Check if currentIndex is greater than items length
        if(currentIndex > items.length){
            currentIndex = 0;
        }

        // Call showSlide function updating current index to display the next slide
        showSlide(currentIndex);
    }
    // Add an event listener to the 'Next' button
    document.getElementById("nextBtn").addEventListener("click", nextSlide);

    // Show the first slide when the page loads
    showSlide(currentIndex);
});

//Create the function to calculate the amount and sales tax

//Declare variables for calculations
let amountTotal = document.getElementById("amount-total");
let salesTax = document.getElementById("sales-tax");
let totalAmount = document.getElementById("total");

//Function to calculate the amountTotal and the salesTax
function calculateTotalAmount(){

    //parse input values to float values
    let amount = parseFloat(amountTotal.value) || 0;
    let saleTax = parseFloat(salesTax.value) || 0;

    //calculate the input values
    let total = amount + (amount * saleTax);

    //set the total at 2 decimal places
    return totalAmount.value = total.toFixed(2);
}

// Event Listeners to input fields
amountTotal.addEventListener("input", calculateTotalAmount);
salesTax.addEventListener("input", calculateTotalAmount);

//Create a popup window for the popuplink

//Add event listener for the popupWindow
document.getElementById("popup-window").addEventListener("click", function(event){

    // Assign popupWindow to a confirmation window
    let confirmedWindow = window.confirm("Are you sure you want to continue with the game?");

    if(confirmedWindow){
        //Open the link to the game
        window.location.href = this.href;
    }
});











