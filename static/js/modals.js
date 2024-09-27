function showModal(element) {
    const elementData = window.exports["elementData"]
    const modal = document.getElementById("myModal");
    const ModalContent = modal.querySelector(".modal-content")
    modal.style.display = "flex";

    if(element=="search"){
        ModalContent.style.width = '25%'
        ModalContent.querySelector(".filters").style.display = 'flex'
        ModalContent.querySelector(".Title").style.display = 'none'
        document.querySelector(".left-arrow").style.display = 'none'
        document.querySelector(".right-arrow").style.display = 'none'
        modal.querySelector("#searchInput").style.display = 'block'
        modal.querySelector(".search-container").style.marginBottom = '20px'
        modal.querySelector("#searchInput").value = ""

        const element_block = ModalContent.querySelector(".basic-info")
        const fromSlider = document.querySelectorAll('#fromSlider');
        const toSlider = document.querySelectorAll('#toSlider');
        GenerateElementList() //Load up default

        let elements = element_block.querySelectorAll(".element")
        ClickedElement(elements)
    } else {
        element--;
        ModalContent.style.width = '30%'
         ModalContent.querySelector(".filters").style.display = 'none'
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
        left_arrow.innerHTML = elementData[element-1]? elementData[element-1].Name : elementData[117].Name
        left_arrow.classList.add(elementData[element-1]? elementData[element-1].Category.replace(/ /g,"-") : elementData[117].Category.replace(/ /g,"-"))
        left_arrow.classList.add(elementData[element-1]? (elementData[element-1].ManMade ? "ManMade" : "Natural") : (elementData[117].ManMade ? "ManMade" : "Natural"))
        left_arrow.classList.add(elementData[element-1]? (elementData[element-1].Diatomic ? "Diatomic" : "Monatomic") : (elementData[117].Diatomic ? "Diatomic" : "Monatomic"))

        right_arrow.classList.remove(right_arrow.classList[2]?.toString())
        right_arrow.classList.remove(right_arrow.classList[2]?.toString())
        right_arrow.classList.remove(right_arrow.classList[2]?.toString())
        right_arrow.innerHTML = elementData[element+1]? elementData[element+1].Name : elementData[0].Name
        right_arrow.classList.add(elementData[element+1]? elementData[element+1].Category.replace(/ /g,"-") : elementData[0].Category.replace(/ /g,"-"))
        right_arrow.classList.add(elementData[element+1]? (elementData[element+1].ManMade ? "ManMade" : "Natural") : (elementData[0].ManMade ? "ManMade" : "Natural"))
        right_arrow.classList.add(elementData[element+1]? (elementData[element+1].Diatomic ? "Diatomic" : "Monatomic") : (elementData[0].Diatomic ? "Diatomic" : "Monatomic"))

        title.classList.remove(title.classList[1]?.toString())
        title.classList.remove(title.classList[1]?.toString())
        title.classList.remove(title.classList[1]?.toString())
        title_name.innerHTML = elementData[element].Name
        title_symbol.innerHTML = elementData[element].Symbol
        title_num.innerHTML = elementData[element].AtomicNumber
        title.classList.add(elementData[element].Category.replace(/ /g,"-"))
        title.classList.add(elementData[element].ManMade ? "ManMade" : "Natural")
        title.classList.add(elementData[element].Diatomic ? "Diatomic" : "Monatomic")

        ModalContent.querySelector("#searchInput").style.display = 'none'
        modal.querySelector(".search-container").style.marginBottom = '0'
        ModalContent.querySelector(".basic-info").innerHTML = `
        -- Origin of Name -- <br>
        ${elementData[element].OriginName} <br><br>
        -- Description -- <br>
        ${elementData[element].Description} <br><br>
        -- Sources -- <br>
        ${elementData[element].Sources} <br><br>
        -- Uses -- <br>
        ${elementData[element].Uses} <br><br>
        -- Discovery -- <br>
        Discoverer: ${elementData[element].Discovery.People} <br>
        Location: ${elementData[element].Discovery.Location} <br>
        Year: ${elementData[element].Discovery.Year} <br><br>
        `
    }
}

function GenerateElementList(stateOfMatter=[], category=[], manmade=null, diatomic=null) {

    const Filtered = filterElements({stateOfMatter, category, manmade, diatomic})
    element_block.innerHTML = Filtered.map((x) => {
        return`
        <div class="element-search">
            <div class="element ${x.Category.replace(/ /g,"-")} ${x.ManMade ? "ManMade" : "Natural"} ${x.Diatomic ? "Diatomic" : "Monatomic"}" style="height:72px; width:72px; margin: -1px;">
                <span class='atomic_number'>${x.AtomicNumber}</span>
                <span class='${x.StateOfMatter} symbol'>${x.Symbol}<br></span>
                <span class='name'>${x.Name}</span>
            </div>
            <div class="element-extraInfo">
                <span class='atomic_mass'>Atomic Mass: ${x.Mass.toFixed(3)}</span>
                <span class='density'>Density: ${x.Density.toFixed(3)} g/m³</span>
                <span class='melting-point'>Melting: ${x.PhaseTransition.Tm.Kelvin || "None"}</span>
                <span class='boiling-point'>Boiling: ${x.PhaseTransition.Tb.Kelvin || "None"}</span>
            </div>
        </div>
        `
    }).toString().replaceAll(',','');
    SearchFilter()
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