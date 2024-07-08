const wrapper = document.querySelector(".sliderWrapper")

const menuItems = document.querySelectorAll(".menuItem")

const products = [{
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [{
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [{
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [{
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [{
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [{
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];

let choosenProduct = product[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// overhere queryselectorAll is used because there are multiple color and size are there 
// querySelector and querySelectorAll are methods in 
// JavaScript used to select elements from the DOM 
// (Document Object Model).
// 
// querySelector
// Purpose: To select the first element that matches a specified CSS selector.
// Usage: element.querySelector(selector)
// Returns: The first matching element or null if no match is found.

// 
// querySelectorAll
// Purpose: To select all elements that match a specified CSS selector.
// Usage: element.querySelectorAll(selector)
// Returns: A static NodeList of all matching elements. If no elements match, it returns an empty NodeList.
// Note: NodeList is similar to an array but not exactly the same. You can loop through it, but it doesn't have all the array methods.

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the choosen product

        choosenProduct = products[index]

        // change texts/name of currentProduct

        currentProductTitle.textContent = choosenProduct.title;
        /* The .textContent property is a standard DOM (Document Object Model) property in JavaScript 
                                                                     that is used to get or set the text content of an element and its descendants.*/

        currentProductPrice.textContent = "$ " + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img

        // assinging specific colors to particular brand and shoe
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;

        });

    });
});

// will change the color of the shoe when it is clicked on color icon

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

// addEventListner:-The addEventListener method is used in JavaScript to
//  set up a function that will be called whenever a specified event is 
// delivered to the target. This method provides a way to attach event 
// handlers to elements without overwriting existing event handlers. It's a 
// versatile and powerful way to handle events in the DOM

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {

        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        // over here when click 42 it got selected but when i clicked 43 ;42 and 43 was both 
        // was selected.
        // to overcome this problem  currentProductSizes.forEach((size) is used 
        // so that only one size is selected at a time
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

// productButoon

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});