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
    { name: "Chicken Alfredo Pizza", image: "https://i.ibb.co/Cbtk70M/chicken-alfredo-pizza.jpg", price: "$12.99" },
    { name: "BBQ Chicken Pizza", image: "https://i.ibb.co/R7DCvvy/bbq-chicken-pizza.jpg", price: "$14.50" },
    { name: "Mushroom Swiss Burger", image: "https://i.ibb.co/7Q4Xf9n/mushroom-swiss-burger.jpg", price: "$9.99" },
    { name: "Veggie Burger", image: "https://i.ibb.co/2yKsKQg/veggie-burger.jpg", price: "$8.49" },
    { name: "Caesar Salad", image: "https://i.ibb.co/Zd6Ns1z/caesar-salad.jpg", price: "$7.99" },
    { name: "Chicken Caesar Salad", image: "https://i.ibb.co/S6y1CpF/chicken-caesar-salad.jpg", price: "$10.99" },
    { name: "Shrimp Scampi", image: "https://i.ibb.co/7tPJ0y8/shrimp-scampi.jpg", price: "$16.99" },
    { name: "Pulled Pork Sandwich", image: "https://i.ibb.co/BCMDfGt/pulled-pork-sandwich.jpg", price: "$11.99" },
    { name: "Fish Tacos", image: "https://i.ibb.co/8PMnWmF/fish-tacos.jpg", price: "$9.99" },
    { name: "Steak Fajitas", image: "https://i.ibb.co/FgbKHxF/steak-fajitas.jpg", price: "$15.99" },
    { name: "Buffalo Wings", image: "https://i.ibb.co/ZMwH7XZ/buffalo-wings.jpg", price: "$9.99" },
    { name: "Cheese Fries", image: "https://i.ibb.co/NLZn7hD/cheese-fries.jpg", price: "$5.99" },
    { name: "Chocolate Brownie Sundae", image: "https://i.ibb.co/nrZBntv/chocolate-brownie-sundae.jpg", price: "$6.99" },
    { name: "Sushi Platter", image: "https://i.ibb.co/7gYjDgC/sushi-platter.jpg", price: "$24.99" },
    { name: "Lobster Roll", image: "https://i.ibb.co/7RCyt3L/lobster-roll.jpg", price: "$18.50" },
    { name: "Philly Cheesesteak", image: "https://i.ibb.co/9t0Xt5t/philly-cheesesteak.jpg", price: "$11.99" },
    { name: "Chicken Tikka Masala", image: "https://i.ibb.co/0jKYtnC/chicken-tikka-masala.jpg", price: "$13.99" },
    { name: "Pad Thai", image: "https://i.ibb.co/R7d1vmG/pad-thai.jpg", price: "$10.99" },
    { name: "Beef Burrito", image: "https://i.ibb.co/25sbpx4/beef-burrito.jpg", price: "$9.99" },
    { name: "Vegetable Tempura", image: "https://i.ibb.co/rdGsYvX/vegetable-tempura.jpg", price: "$8.99" },
    { name: "Hawaiian Poke Bowl", image: "https://i.ibb.co/zH5j24X/hawaiian-poke-bowl.jpg", price: "$14.99" },
    { name: "Fettuccine Alfredo", image: "https://i.ibb.co/Ryy2zYW/fettuccine-alfredo.jpg", price: "$12.99" },
    { name: "Margarita Cocktail", image: "https://i.ibb.co/YcQr09w/margarita-cocktail.jpg", price: "$8.99" },
    { name: "Chocolate Lava Cake", image: "https://i.ibb.co/kBxGcrk/chocolate-lava-cake.jpg", price: "$7.99" },
    { name: "Strawberry Cheesecake", image: "https://i.ibb.co/SyDqM8x/strawberry-cheesecake.jpg", price: "$6.99" },
    { name: "Tiramisu", image: "https://i.ibb.co/k2pN9yT/tiramisu.jpg", price: "$8.50" },
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
                        <button class="details-button">Details</button>
                    </div>`;
        searchResults.appendChild(foodItemElement);
    });
}

searchInput.addEventListener('input', filterFoodItems);

