function showModal(element) {
    const elementData = window.exports["elementData"]
    const modal = document.getElementById("myModal");
    const ModalContent = modal.querySelector(".modal-content")
    modal.style.display = "flex";

    if(element=="search"){
        ModalContent.querySelector(".Title").style.display = 'none'
        document.querySelector(".left-arrow").style.display = 'none'
        document.querySelector(".right-arrow").style.display = 'none'
        modal.querySelector("#searchInput").style.display = 'block'
        modal.querySelector("#searchInput").value = ""
        const element_block = ModalContent.querySelector(".basic-info")

        element_block.innerHTML = GenerateElementList([], []) // Filter
        let elements = element_block.querySelectorAll(".element")
        ClickedElement(elements)

    } else {
        const title = ModalContent.querySelector(".Title")
        const title_name = ModalContent.querySelector(".Title-name")
        const title_num = ModalContent.querySelector(".Title-num")
        const title_symbol = ModalContent.querySelector(".Title-symbol")
        document.querySelector(".left-arrow").style.display = ''
        document.querySelector(".right-arrow").style.display = ''
        ModalContent.querySelector("#searchInput").style.display = 'none'
        title.style.display = 'block'
        console.log(title)
        title_name.innerHTML = elementData[element-1].Name
        title_symbol.innerHTML = elementData[element-1].Symbol
        title_num.innerHTML = elementData[element-1].AtomicNumber
        title.classList.remove(title.classList[1]?.toString())
        title.classList.remove(title.classList[1]?.toString())
        title.classList.add(elementData[element-1].Category.replace(/ /g,"-"))
        title.classList.add(elementData[element-1].ManMade ? "ManMade" : "Natural")
        ModalContent.querySelector(".basic-info").innerHTML = `
        -- Origin of Name -- <br>
        ${elementData[element-1].OriginName} <br><br>
        -- Description -- <br>
        ${elementData[element-1].Description} <br><br>
        -- Sources -- <br>
        ${elementData[element-1].Sources} <br><br>
        -- Uses -- <br>
        ${elementData[element-1].Uses} <br><br>
        -- Discovery -- <br>
        Discoverer: ${elementData[element-1].Discovery.People} <br>
        Location: ${elementData[element-1].Discovery.Location} <br>
        Year: ${elementData[element-1].Discovery.Year} <br><br>
        `
    }
}

function GenerateElementList(stateOfMatter=[], category=[], manmade=null) {
    const El = window.exports["El"]

    const Filtered = El.filter(stateOfMatter, category, manmade)
    return Filtered.map((x) => {
        return`
        <div class="element ${x.Category.replace(/ /g,"-")} ${x.ManMade ? "ManMade" : "Natural"}">
            <span class='atomic_number'>${x.AtomicNumber}</span>
            <span class='${x.StateOfMatter} symbol'>${x.Symbol}<br></span>
            <span class='name'>${x.Name}</span>
        </div>
        `
    }).toString().replaceAll(',','');
}

function hideModal() {
    var modal = document.getElementById("myModal");

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
hideModal()