const foodItems = [
    {
        name: "Pizza",
        category : "pizza",
        price: "$200",
        image: "https://i.ibb.co/55MB6qc/pizza-8635314-1280.jpg",
        description: "Our pizza is packed with delicious flavour that everyone will love. Delicious pizza with toppings. Pizza today for a delicious treat that will satisfy your cravings!"
    },
    {
        name: "Burger",
        category : "Burger",
        price: "$120",
        image: "https://i.ibb.co/9v5qQTx/burger1.jpg" ,
        description: "Classic burger with cheese and vegetables. Every bite of our Classic Burger is a mouthful of savory goodness, with the perfect balance of flavors and textures."
    },
    {
        name: "Salad",
        category : "Veg",
        price: "$60",
        image: "https://i.ibb.co/TP0qzm7/salad.jpg",
        description: "Fresh salad with mixed greens and dressing"
    },
    {
        name: "Chicken Biryani",
        category: "Biryani",
        price : "$450",
        image: "https://i.ibb.co/G5W5zgJ/Chicken-Biryani.jpg",
        description : "Taste is too good"
    },
    {
        name: "Mutton Biryani",
        category: "Biryani",
        price: "$350",
        image: "https://i.ibb.co/yp9BJBD/Mutton-Biryani.jpg",
        description: "Authentic mutton biryani with aromatic spices"
    },
    {
        name: "Vegetable Biryani",
        category: "Biryani",
        price: "$250",
        image:"https://i.ibb.co/RzLd8zv/vegetable-Biryani.jpg", 
        description: "Healthy and flavorful vegetable biryani"
    },
    {
        name: "Prawn Biryani",
        category: "Biryani",
        price: "$400",
        image: "https://i.ibb.co/8z3TSpR/Prawn-Biryani.jpg",
        description: "Exquisite prawn biryani cooked to perfection"
    },
    {
        name: "Egg Biryani",
        category: "Biryani",
        price: "$300",
        image: "https://i.ibb.co/NLD23PS/Egg-Biryani.jpg",
        description: "Savory egg biryani packed with flavors"
    },
    {
        name: "Paneer Biryani",
        category: "Biryani",
        price: "$280",
        image: "https://i.ibb.co/C6N3dL3/Paneer-Biryani.jpg",
        description: "Delectable paneer biryani for vegetarians"
    },
    {
        name: "Classic Beef Burger",
        category: "Burger",
        price: "$150",
        image: "https://i.ibb.co/tZqJWMc/beefburger.jpg",
        description: "Juicy beef patty with classic burger toppings"
    },
    {
        name: "Chicken Burger",
        category: "Burger",
        price: "$130",
        image: "https://i.ibb.co/rvcGNby/burger5.jpg",
        description: "Succulent chicken burger with fresh ingredients"
    },
    {
        name: "Fish Burger",
        category: "Burger",
        price: "$140",
        image: "https://i.ibb.co/1ZtMtQP/burger4.jpg",
        description: "Tasty fish burger served with tartar sauce"
    },
    {
        name: "Mushroom Burger",
        category: "Burger",
        price: "$120",
        image: "https://i.ibb.co/x2WvPYv/burger3.jpg",
        description: "Satisfying mushroom burger for vegetarians"
    },
    {
        name: "Cheeseburger",
        category: "Burger",
        price: "$130",
        image: "https://i.ibb.co/jMb3rdq/burger2.jpg",
        description: "Classic cheeseburger with melted cheese"
    },
    {
        name: "Margherita Pizza",
        category: "Pizza",
        price: "$180",
        image: "https://i.ibb.co/zH4S8PR/Margherita-Pizza.jpg",
        description: "Simple yet delicious margherita pizza"
    },
    {
        name: "Pepperoni Pizza",
        category: "Pizza",
        price: "$220",
        image: "https://i.ibb.co/7NHCkWf/Pepperonipizza.jpg",
        description: "Pepperoni-topped pizza with gooey cheese"
    },
    {
        name: "BBQ Chicken Pizza",
        category: "Pizza",
        price: "$250",
        image: "https://i.ibb.co/7NyWxJq/bbqpizza.jpg" ,
        description: "Smokey BBQ chicken pizza with a tangy sauce"
    },
    {
        name: "Supreme Pizza",
        category: "Pizza",
        price: "$270",
        image: "https://i.ibb.co/9VGxWBv/suprimepizza.jpg",
        description: "Loaded with various toppings, the ultimate pizza experience"
    },
    {
        name: "Butter Chicken",
        category: "NorthIndian",
        price: "$300",
        image:  href= "https://i.ibb.co/yQ04VTW/butterchicken.jpg",
        description: "Creamy butter chicken curry with tender chicken pieces"
    },
    {
        name: "Paneer Tikka Masala",
        category: "NorthIndian",
        price: "$280",
        image: "https://i.ibb.co/gg34nbk/paneertikka.jpg",
        description: "Spicy and flavorful paneer tikka masala curry"
    },
    {
        name: "Dal Makhani",
        category: "NorthIndian",
        price: "$200",
        image: "https://i.ibb.co/mBLnPjb/dalmakhani.jpg",
        description: "Rich and creamy lentil curry cooked with spices"
    },
    {
        name: "Aloo Paratha",
        category: "NorthIndian",
        price: "$100",
        image: "https://i.ibb.co/nb8djw2/aloparath.jpg" ,
        description: "Traditional Indian flatbread stuffed with spiced potatoes"
    }
];



let Mywishlist = [];
function addToWishlist(index) {
    const foodItem = foodItems[index];

    if (!Mywishlist.some(item => item.name === foodItem.name)) {
        const li = document.createElement("li");
        li.className = "wishlist-item";

        li.innerHTML = `<img src="${foodItem.image}" alt="${foodItem.name}" style="width: 400px; height: 400p">
            <span>${foodItem.name} - ${foodItem.description} - ${foodItem.price}</span>
            <button class="remove-button" onclick="removeFromWishlist(this)">Remove <i class="fa-regular fa-heart"></i></button>`;

        document.getElementById("wishlist-items").appendChild(li);

        Mywishlist.push(foodItem);
    }
}


function removeFromWishlist(button) {
    const li = button.parentNode;
    const itemName = li.querySelector('img').alt;

    Mywishlist = Mywishlist.filter(item => item.name !== itemName);

    li.remove();
}

function IndianFoodItems() {
    const foodItemsContainer = document.getElementById("food-items");

    foodItems.forEach((foodItem, index) => {
        const foodDiv = document.createElement("div");
        foodDiv.className = "food-item";
        foodDiv.innerHTML = `<img src="${foodItem.image}" alt="${foodItem.name}" style="width: 100px; height: 100px;">
            <h3>${foodItem.name}</h3>
            <p>${foodItem.description}</p>
            <p>${foodItem.price}</p>
            <button onclick="addToWishlist(${index})">Add to Wishlist</button>`;
        foodItemsContainer.appendChild(foodDiv);
    });
}
IndianFoodItems();
