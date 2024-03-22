
function displayCategory() {
    const categoryString = sessionStorage.getItem('categoryData');
    const categoryData = JSON.parse(categoryString);

    const categoryContainer = document.getElementById('categoryData');
    categoryData.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `<img src="${item.image}" alt="${item.name}">
                                <h2> ${item.name}</h2>`;
        categoryContainer.appendChild(itemElement);
    });
}


displayCategory();
