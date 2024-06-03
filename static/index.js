window.onload = function(){
    fetch('/get_data')
        .then(response => response.json())
        .then(data => {
            let elementData = data; // Do something with the retrieved data
            const table_1 = document.querySelector(".table-1");
            let El = new Elements(data)

            for (let i = 0; i < 133; i++) { // Generate the table grid
                let element = document.createElement("div");
                element.className = "element block";
                table_1.appendChild(element);
            }

            let elements = document.querySelectorAll(".element")
            ClickedElement(elements)

            const element_1 = document.querySelectorAll(".block");

            function Display(min, max, offset=0){
                for(let i = min; i < max; i++) {
                    let idx = i+offset
                    let atomic_number = idx+1
                    let base = elementData[idx]
                    let curr = element_1[i]
                    let category = elementData[idx].Category
                    curr.innerHTML = `
                        <span class='atomic_number'>${atomic_number}</span>
                        <span class="${elementData[idx].StateOfMatter} symbol">${base.Symbol}<br></span>
                        <span class='name'>${base.Name}</span>
                    `
                    curr.classList.add(category.replace(/ /g,"-"))
                }
            }

            Display(0, 56)
            Display(56, 73, 15)
            Display(73, 88, 30)
            Display(103, 118, -47)
            Display(118, 133, -30)

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