let search = document.querySelector(".search-icon")
window.addEventListener("click", function(event) {
    if (event.target == search) {
        showModal("search")
    }
});

document.getElementById('searchInput').addEventListener('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const listItems=document.querySelector(".modal-content").querySelectorAll('.element')
    
    listItems.forEach(function (item) {
        const itemText = item.textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});