window.onload = function(){
    fetch('/get_data')
        .then(response => response.json())
        .then(data => {
            let elementData = data; // Do something with the retrieved data
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
            ClickedElement(elements)

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

            function PreloadSearchMap() {
                const elementMap = elementData.map((x, i) => {
                    return`
                    <div class="element ${elementData[i].Category.replace(/ /g,"-")}">
                        <span class='atomic_number'>${i+1}</span>
                        <span class='symbol'>${elementData[i].Symbol}<br></span>
                        <span class='name'>${elementData[i].Name}</span>
                    </div>
                    `
                }).toString().replaceAll(',','');
                window.exports = {elementData, elementMap};
                console.log(elementMap)
            }
            PreloadSearchMap()
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

var currElementNumber = 0;
function ClickedElement(elements) {
    elements.forEach(element => {
        element.onclick = function(){
            currElementNumber = parseInt(element.querySelector(".atomic_number").innerHTML)
            console.log(currElementNumber)
            showModal(currElementNumber)
        }
    });
}