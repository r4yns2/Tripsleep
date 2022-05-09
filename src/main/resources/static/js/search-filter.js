let output = {
    data: [
        {
            productName: "Royal Street",
            category: "Luxury",
            price: "349",
            image: "../img/Hotel-room-1.jpg",
            link: "../product/product.html",
        },
        {
            productName: "Dreams Hotel",
            category: "Single-Room",
            price: "149",
            image: "../img/Hotel-room-3.jpg",
            link: "../product/product.html",
        },
        {
            productName: "River High",
            category: "All-Inclusive",
            price: "224",
            image: "../img/Hotel-room-4.jpg",
            link: "../product/product.html",
        },
        {
            productName: "Sea Palace",
            category: "All-Inclusive",
            price: "129",
            image: "../img/Hotel-room-5.jpg",
            link: "../product/product.html",
        },
        {
            productName: "Cloud Hotel",
            category: "Luxury",
            price: "183",
            image: "../img/Hotel-room-6.jpg",
            link: "../product/product.html",
        },
        {
            productName: "Binding Sun",
            category: "Economy",
            price: "99",
            image: "../img/Hotel-room-7.jpg",
            link: "../product/product.html",
        },
        {
            productName: "Queen`s Gambit",
            category: "Single-Room",
            price: "122",
            image: "../img/Hotel-room-8.jpg",
            link: "../product/product.html",
        },
        {
            productName: "Comfy Hotel",
            category: "All-Inclusive",
            price: "220",
            image: "../img/Hotel-room-2.png",
            link: "../product/product.html",
        },
    ],
};
for (let i of output.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //link tag
    let link = document.createElement("a");
    link.setAttribute("href", i.link);
    imgContainer.appendChild(link);
    card.appendChild(imgContainer);
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    link.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("output").appendChild(card);
}
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}
//Search button click
document.getElementById("filter-btn").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});
//Initially display all products
window.onload = () => {
    filterProduct('all');
};