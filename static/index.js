window.onload = function(){
    fetch('/get_data')
        .then(response => response.json())
        .then(data => {
            let elementData = data; // Do something with the retrieved data
            const table_1 = document.querySelector(".table-1");
            let El = new Elements(data)

            function GenerateGrids(amount, className) {
                for (let i = 0; i < amount; i++) {
                    let element = document.createElement("div");
                    element.className = className;
                    table_1.appendChild(element);
                }
            }

            GenerateGrids(133, "element first-block");

            let elements = document.querySelectorAll(".element")
            ClickedElement(elements)

            const element_1 = document.querySelectorAll(".first-block");

            function Display(min, max, offset=0){
                for(let i = min; i < max; i++) {
                    let idx = i+offset
                    let atomic_number = idx+1
                    let base = elementData[idx]
                    console.log(atomic_number)
                    element_1[i].innerHTML = `
                        <span class='atomic_number'>${atomic_number}</span>
                        <span class="${elementData[idx].StateOfMatter} symbol">${base.Symbol}<br></span>
                        <span class='name'>${base.Name}</span>
                    `
                }
            }

            Display(0, 56)
            Display(56, 73, 15)
            Display(73, 88, 30)
            Display(103, 118, -47)
            Display(118, 133, -30)

            function ColourCode(min, max, offset=0) {
                for(let i = min; i < max; i++) {
                    let curr = element_1[i]
                    let idx = i+offset
                    let category = elementData[idx].Category
                    curr.classList.add(category.replace(/ /g,"-"))
                }
            }

            ColourCode(0, 56)
            ColourCode(56, 73, 15)
            ColourCode(73, 88, 30)
            ColourCode(103, 118, -47)
            ColourCode(118, 133, -30)

            function PreloadSearchMap() {
                const elementMap = elementData.map((x, i) => {
                    return`
                    <div class="element ${elementData[i].Category.replace(/ /g,"-")}">
                        <span class='atomic_number'>${i+1}</span>
                        <span class='${elementData[i].StateOfMatter} symbol'>${elementData[i].Symbol}<br></span>
                        <span class='name'>${elementData[i].Name}</span>
                    </div>
                    `
                }).toString().replaceAll(',','');
                window.exports = {elementData, elementMap, El};
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