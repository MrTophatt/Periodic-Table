window.onload = function(){
    const table_1 = document.querySelector(".table-1");
    console.log(table_1)
    const table_2 = document.querySelector(".table-2");
    let elementData;

    fetch('/get_data')
        .then(response => response.json())
        .then(data => {
            elementData = data; // Do something with the retrieved data

            function GenerateGrids(amount, className, table) {
            for (let i = 0; i < amount; i++) {
                let element = document.createElement("div");
                element.className = className;
                table.appendChild(element);
            }
            }
            let elements = document.querySelectorAll("element");
            console.log(elements)

            elements.forEach(element => {
                element.onclick = () => {
                    console.log("clicked");
                };
            });

            GenerateGrids(88, "element first-block", table_1);
            GenerateGrids(30, 'element second-block', table_2);

            const element_1 = document.querySelectorAll(".first-block");
            const element_2 = document.querySelectorAll(".second-block");
            const liquids = [35, 80]
            const gasses = [1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86]

            function Display(min, max, table, offset=0){
                for(let i = min; i < max; i++) {
                    let idx = i+offset
                    console.log(idx, offset)
                    let atomic_number = idx+1
                    console.log(elementData)
                    let base = elementData[idx]
                    console.log(base)
                    table[i].innerHTML = `
                        <span class='atomic_number'>${atomic_number}</br></span>
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
            console.log(element_2)
            Display(0, 15, element_2, 56)
            Display(15, 30, element_2, 73)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}