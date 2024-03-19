<<<<<<< HEAD
const main = document.getElementById("main");
const toggleForm = () => {
  const container = document.querySelector('.container');
  container.classList.toggle('panel');
};
document.addEventListener("DOMContentLoaded", function() {
  const registerButton = document.getElementById("registerButton");

  registerButton.addEventListener("click", function() {
    if (main.style.display === "none") {
      main.style.display = "block";
    } else {
      main.style.display = "none";
    }
  });
});
function button_signup() {
  let gmail = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (gmail.trim() === "" || password.trim() === "") {
    alert("Please enter email and password");
    return;
  }

  localStorage.setItem("gmail", gmail);
  localStorage.setItem("password", password); 
  alert("Sign up completed");
  window.location.href = "loginsignup.html";
}

function login() {
  let gmail = document.getElementById("email-2").value;
  let password = document.getElementById("password-2").value;
  let oldemail = localStorage.getItem("gmail");
  let oldpassword = localStorage.getItem('password'); 

  if (gmail.trim() === "" || password.trim() === "") {
    alert("Please enter email and password");
    return;
  }

  if (gmail === oldemail && password === oldpassword) {
    alert("Login successful");
    window.location.href = "loginsign.html";
  } else {
    alert("Invalid email or password");
  }
}
=======
const foodItems = [
    { name: "Pizza", image: "https://i.ibb.co/LQLdg0d/50a7b6a13177e653720b2a1d53e02958.jpg", price: "$245" },
    { name: "Patty Burger", image: "https://i.ibb.co/Xs8tVBs/bzfywxdvmkafjsakvhye.jpg", price: "Price not available" },
    { name: "corn Pizza", image: "https://i.ibb.co/TRRFsNd/78ef2bde15c06905b0586858c34f89ad.jpg", price: "Price not available" },
    { name: "paneer Pizza", image: "https://i.ibb.co/cvf9Fm3/bmyx49cem3y49tmnpw3e.jpg", price: "Price not available" },
    { name: "Magrita Pizza", image: "https://i.ibb.co/1Mng5Bw/zvwynkwp4rpjr25pfxyx.jpg", price: "Price not available" },
    { name: "Peppy Paneer Pizza", image: "https://i.ibb.co/jhvhGSk/chpikid66ofkkc58mwzd.jpg", price: "Price not available" },
    { name: "Veggie Paradise Pizza", image: "https://i.ibb.co/XFX95Vc/2a8ea479040d62f82871e1be7470672a.jpg", price: "Price not available" },
    { name: "Feta cheese Pizza", image: "https://i.ibb.co/vYkh3kZ/v5r6xgrmavtuy0rdcfcs.jpg", price: "Price not available" },
    { name: "capsicum Pizza", image: "https://i.ibb.co/6wTQ4qg/d70d19f6c1fd0c82e64aebb9877c27e2.jpg", price: "Price not available" },
    { name: "Domino's Pizza", image: "https://i.ibb.co/bXNdKsc/lyzr5febietpw1mnecd9-1.jpg", price: "Price not available" },
    { name: "Beggie Burger", image: "https://i.ibb.co/zF6ydzw/75d680b6b24c85e4bd955763e40814b0.jpg", price: "Price not available" },
    { name: "Cheese Burger", image: "https://i.ibb.co/VqCZcNd/uwuevkr6jbt6btijg91i.jpg", price: "Price not available"},
    { name: "Chesse Burger", image: "https://i.ibb.co/fv7VwWZ/aaqxryou8bhnxlujytji.jpg", price: "Price not available" },
    { name: "Asian Salad", image: "https://i.ibb.co/vxh0DWH/ogyppr5p7dx3kw3fuyi2.jpg", price: "Price not available" },
    { name: "Chicken Alfredo Pizza", image: "https://i.ibb.co/myn3mWj/Chicken-Alfredo-Pizza-5.jpg", price: "$12.99" },
    { name: "BBQ Chicken Pizza", image: "https://i.ibb.co/vQL5HH0/58411-8a92c002662b483984bb8a690ea51763.webp", price: "$14.50" },
    { name: "Mushroom Swiss Burger", image: "https://i.ibb.co/m8wkVsd/Easy-Swiss-Mushroom-Burgers-7-SQ.webp", price: "$9.99" },
    { name: "Veggie Burger", image: "https://i.ibb.co/0cphSqj/burger-recipe-1.webp", price: "$8.49" },
    { name: "Caesar Salad", image: "https://i.ibb.co/3rXqnSc/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg", price: "$7.99" },
    { name: "Chicken Caesar Salad", image: "https://i.ibb.co/xs2s05Y/FT-Chicken-Caesar-Salad-Spend-With-Pennies-4.jpg", price: "$10.99" },
    { name: "Shrimp Scampi", image: "https://i.ibb.co/44864R6/229960-shrimp-scampi-with-pasta-DDMFS-4x3-e065ddef4e6d44479d37b4523808cc23.jpg", price: "$16.99" },
    { name: "Pulled Pork Sandwich", image: "https://i.ibb.co/kBQWwvC/pulled-pork-sandwiches-on-butcher-paper-horizontal.jpg", price: "$11.99" },
    { name: "Fish Tacos", image: "https://i.ibb.co/p1Kk6Dz/Fish-Tacos-0938.jpg", price: "$9.99" },
    { name: "Steak Fajitas", image: "https://i.ibb.co/TvGx2QM/Steak-Fajitas-1-2.webp", price: "$15.99" },
    { name: "Buf Wings", image: "https://i.ibb.co/C7MF4TZ/Baked-Buffalo-Wings-sq.jpg", price: "$9.99" },
    { name: "Cheese Fries", image: "https://i.ibb.co/ZH4KwMg/featured-cheese-fries-recipe.jpg", price: "$5.99" },
    { name: "Chocolate Brownie Sundae", image: "https://i.ibb.co/WDFtx92/Brownie-Sundae-1-2-735x1103.jpg", price: "$6.99" },
    { name: "Sushi Platter", image: "https://i.ibb.co/pw3PhHf/IMG20230816150632.webp", price: "$24.99" },
    { name: "Lobster Roll", image: "https://i.ibb.co/Q70fKhP/DK6A2864.jpg", price: "$18.50" },
    { name: "Philly Cheesesteak", image: "https://i.ibb.co/4FR99Q8/philly-cheesesteak-3c4be15.jpg", price: "$11.99" },
    { name: "Chicken Tikka Masala", image: "https://i.ibb.co/qdkf4cP/Chicken-Tikka-Masala-0-SQ.webp", price: "$13.99" },
    { name: "Pad Thai", image: "https://i.ibb.co/f2wDm2b/42968-pad-thai-DDMFS-4x3-f46b490ef89b4694b8bf4c5ac54a486b.jpg", price: "$10.99" },
    { name: "Burrito", image: "https://i.ibb.co/r7xKxw8/Beef-Burrito-Recipe-1200x900.webp", price: "$9.99" },
    { name: "Vegetable Tempura", image: "https://i.ibb.co/7XL8xJm/friedveggies-7.jpg", price: "$8.99" },
    { name: "Hawaiian Poke Bowl", image: "https://i.ibb.co/HBxgTpH/IMG-5743-scaled.jpg", price: "$14.99" },
    { name: "Fettuccine Alfredo", image: "https://i.ibb.co/ZmkZcDV/Alfredo-Fettuccine-680px-plated.webp", price: "$12.99" },
    { name: "Margarita Cocktail", image: "https://i.ibb.co/BTQyPq3/222416-maragrita-cocktail-ddmfs-3-X4-0319-1-35ebaafc51d7410eae4a7991b578dd4c.jpg", price: "$8.99" },
    { name: "Chocolate Lava Cake", image: "https://i.ibb.co/MSynTX2/Strawberry-cheesecake-recipe-6-of-8.jpg", price: "$7.99" },
    { name: "Strawberry Cheesecake", image: "https://i.ibb.co/Vjps8v5/strawberry-margarita-cheesecake3.webp", price: "$6.99" },
    { name: "Tiramisu", image: "https://i.ibb.co/NmktgSv/21412-tiramisu-ii-2x1-123-ec8870161e2a4547ba282da742b0d9ed.jpg", price: "$8.50" },
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function filterFoodItems() {
    const searchText = searchInput.value.trim().toLowerCase();
    const filteredItems = foodItems.filter(item =>
        item.name.toLowerCase().includes(searchText)
    );
    displayResults(filteredItems);
}

function displayResults(results) {
    searchResults.innerHTML = '';
    results.forEach(item => {
        const foodItemElement = document.createElement('div');
        foodItemElement.classList.add('food-item');
        foodItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="food-item-details">
                <h2>${item.name}</h2>
                <p>${item.price || "Price not available"}</p>
            </div>`;
        
            foodItemElement.addEventListener('click', () => {
                window.location.href = `data.html`
            });
        searchResults.appendChild(foodItemElement);
    });
}


searchInput.addEventListener('input', filterFoodItems);



>>>>>>> f20f29de86914974f89b09a70352ae491ff6ab23
