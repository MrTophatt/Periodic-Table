let search = document.querySelector(".search-icon")
window.addEventListener("click", function(event) {
    if (event.target == search) {
        showModal("search")
    }
});

document.getElementById('searchInput').addEventListener('input', function () {
    SearchFilter()
});

function SearchFilter() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const elementList = document.querySelector(".modal-content").querySelectorAll('.element-search')
    
    elementList.forEach(function (item) {
        const itemText = item.children[0].textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}