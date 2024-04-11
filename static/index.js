window.onload = function(){
    fetch('/get_data')
        .then(response => response.json())
        .then(data => {
            let elementData = data; // Do something with the retrieved data
            let currElementNumber = 0;

            const table_1 = document.querySelector(".table-1");
            const table_2 = document.querySelector(".table-2");

            function GenerateGrids(amount, className, table) {
                for (let i = 0; i < amount; i++) {
                    let element = document.createElement("div");
                    element.className = className;
                    table.appendChild(element);
                }
            }

            GenerateGrids(88, "element first-block", table_1);
            GenerateGrids(30, 'element second-block', table_2);

            let elements = document.querySelectorAll(".element")

            function ClickedElement(elements) {
                elements.forEach(element => {
                    element.onclick = function(){
                        currElementNumber = parseInt(element.querySelector(".atomic_number").innerHTML)
                        console.log(currElementNumber)
                        showModal(currElementNumber)
                    }
                });
            }
            ClickedElement(elements)

            let search = document.querySelector(".search-icon")

            search.onclick = function(){
                hideModal()
                showModal("search")
            }

            const element_1 = document.querySelectorAll(".first-block");
            const element_2 = document.querySelectorAll(".second-block");
            const liquids = [35, 80]
            const gasses = [1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86]

            function Display(min, max, table, offset=0){
                for(let i = min; i < max; i++) {
                    let idx = i+offset
                    let atomic_number = idx+1
                    let base = elementData[idx]
                    table[i].innerHTML = `
                        <span class='atomic_number'>${atomic_number}</span>
                        <span class='symbol'>${base.Symbol}<br></span>
                        <span class='name'>${base.Name}</span>
                    `
                    if (liquids.includes(atomic_number)){
                        table[i].innerHTML = `
                            <span class='atomic_number'>${atomic_number}</span>
                            <span class='liquid symbol'>${base.Symbol}</span>
                            <span class='name'>${base.Name}</span>
                        `
                    }
                    if (gasses.includes(atomic_number)){
                        table[i].innerHTML = `
                            <span class='atomic_number'>${atomic_number}</span>
                            <span class='gas symbol'>${base.Symbol}</span>
                            <span class='name'>${base.Name}</span>
                        `
                    }
                }
            }

            Display(0, 56, element_1)
            Display(56, 73, element_1, 15)
            Display(73, 88, element_1, 30)
            Display(0, 15, element_2, 56)
            Display(15, 30, element_2, 73)

            function ColourCode(min, max, table, offset=0) {
                for(let i = min; i < max; i++) {
                    let curr = table[i]
                    let idx = i+offset
                    let category = elementData[idx].Category
                    curr.classList.add(category.replace(/ /g,"-"))
                }
            }

            ColourCode(0, 56, element_1)
            ColourCode(56, 73, element_1, 15)
            ColourCode(73, 88, element_1, 30)
            ColourCode(0, 15, element_2, 56)
            ColourCode(15, 30, element_2, 73)

            function showModal(element) {
                const modal = document.getElementById("myModal");
                const ModalContent = modal.querySelector(".modal-content")
                modal.style.display = "flex";

                if(element=="search"){
                    ModalContent.querySelector(".Title").style.display = 'none'
                    modal.querySelector("#searchInput").style.display = 'block'
                    modal.querySelector("#searchInput").innerHTML = ''
                    const element_block = ModalContent.querySelector(".basic-info")
                    element_block.innerHTML = ""
                    for(i=0; i<elementData.length; i++) {
                        element_block.innerHTML = element_block.innerHTML + `
                            <div class="element ${elementData[i].Category.replace(/ /g,"-")}">
                                <span class='atomic_number'>${i+1}</span>
                                <span class='symbol'>${elementData[i].Symbol}<br></span>
                                <span class='name'>${elementData[i].Name}</span>
                            </div>
                        `
                    }
                    let elements = element_block.querySelectorAll(".element")
                    ClickedElement(elements)

                } else {
                    ModalContent.querySelector(".Title").style.display = 'block'
                    ModalContent.querySelector("#searchInput").style.display = 'none'
                    ModalContent.querySelector(".Title").innerHTML = elementData[element-1].Name
                    ModalContent.querySelector(".basic-info").innerHTML = elementData[element-1].Symbol
                }
            }
            function hideModal() {
                var modal = document.getElementById("myModal");

                window.addEventListener("click", function(event) {
                    if (event.target === modal) {
                        modal.style.display = "none";
                    }
                });
            }
            hideModal()

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

            function ArrowsClicked() {
                var leftArrow = document.querySelector(".left-arrow");
                var rightArrow = document.querySelector(".right-arrow");

                window.addEventListener("click", function(event) {
                    if (event.target === leftArrow) {
                        currElementNumber--
                        if (currElementNumber < 1){
                            currElementNumber = 118
                        }
                        console.log(currElementNumber)
                        showModal(currElementNumber)
                    }

                    if (event.target === rightArrow) {
                        currElementNumber++
                        if (currElementNumber > 118){
                            currElementNumber = 1
                        }
                        console.log(currElementNumber)
                        showModal(currElementNumber)
                    }
                });
            }
            ArrowsClicked()
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}