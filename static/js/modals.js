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
        modal.querySelector(".search-container").style.marginBottom = '20px'
        modal.querySelector("#searchInput").value = ""
        const element_block = ModalContent.querySelector(".basic-info")

        element_block.innerHTML = GenerateElementList([], [], null, null) // Filter
        let elements = element_block.querySelectorAll(".element")
        ClickedElement(elements)

    } else {
        const title = ModalContent.querySelector(".Title")
        const title_name = ModalContent.querySelector(".Title-name")
        const title_num = ModalContent.querySelector(".Title-num")
        const title_symbol = ModalContent.querySelector(".Title-symbol")
        const left_arrow = ModalContent.querySelector(".left-arrow")
        const right_arrow = ModalContent.querySelector(".right-arrow")

        left_arrow.style.display = ''
        right_arrow.style.display = ''
        title.style.display = 'block'

        left_arrow.classList.remove(left_arrow.classList[2]?.toString())
        left_arrow.classList.remove(left_arrow.classList[2]?.toString())
        left_arrow.classList.remove(left_arrow.classList[2]?.toString())
        left_arrow.innerHTML = elementData[element-2]? elementData[element-2].Name : elementData[117].Name
        left_arrow.classList.add(elementData[element-2]? elementData[element-2].Category.replace(/ /g,"-") : elementData[117].Category.replace(/ /g,"-"))
        left_arrow.classList.add(elementData[element-2]? (elementData[element-2].ManMade ? "ManMade" : "Natural") : (elementData[117].ManMade ? "ManMade" : "Natural"))
        left_arrow.classList.add(elementData[element-2]? (elementData[element-2].Diatomic ? "Diatomic" : "Monatomic") : (elementData[117].Diatomic ? "Diatomic" : "Monatomic"))

        right_arrow.classList.remove(right_arrow.classList[2]?.toString())
        right_arrow.classList.remove(right_arrow.classList[2]?.toString())
        right_arrow.classList.remove(right_arrow.classList[2]?.toString())
        right_arrow.innerHTML = elementData[element]? elementData[element].Name : elementData[0].Name
        right_arrow.classList.add(elementData[element]? elementData[element].Category.replace(/ /g,"-") : elementData[0].Category.replace(/ /g,"-"))
        right_arrow.classList.add(elementData[element]? (elementData[element].ManMade ? "ManMade" : "Natural") : (elementData[0].ManMade ? "ManMade" : "Natural"))
        right_arrow.classList.add(elementData[element]? (elementData[element].Diatomic ? "Diatomic" : "Monatomic") : (elementData[0].Diatomic ? "Diatomic" : "Monatomic"))

        title.classList.remove(title.classList[1]?.toString())
        title.classList.remove(title.classList[1]?.toString())
        title.classList.remove(title.classList[1]?.toString())
        title_name.innerHTML = elementData[element-1].Name
        title_symbol.innerHTML = elementData[element-1].Symbol
        title_num.innerHTML = elementData[element-1].AtomicNumber
        title.classList.add(elementData[element-1].Category.replace(/ /g,"-"))
        title.classList.add(elementData[element-1].ManMade ? "ManMade" : "Natural")
        title.classList.add(elementData[element-1].Diatomic ? "Diatomic" : "Monatomic")

        ModalContent.querySelector("#searchInput").style.display = 'none'
        modal.querySelector(".search-container").style.marginBottom = '0'
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

function GenerateElementList(stateOfMatter=[], category=[], manmade=null, diatomic=null) {
    const El = window.exports["El"]

    const Filtered = El.filter(stateOfMatter, category, manmade, diatomic)
    return Filtered.map((x) => {
        return`
        <div class="element-search">
            <div class="element ${x.Category.replace(/ /g,"-")} ${x.ManMade ? "ManMade" : "Natural"} ${x.Diatomic ? "Diatomic" : "Monatomic"}" style="margin:0; left:-1px; position: relative;">
                <span class='atomic_number'>${x.AtomicNumber}</span>
                <span class='${x.StateOfMatter} symbol'>${x.Symbol}<br></span>
                <span class='name'>${x.Name}</span>
            </div>
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