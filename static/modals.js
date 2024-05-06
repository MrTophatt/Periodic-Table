function showModal(element) {
    const elementData = window.exports["elementData"]
    const elementMap = window.exports["elementMap"]
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
        element_block.innerHTML = elementMap
        let elements = element_block.querySelectorAll(".element")
        ClickedElement(elements)

    } else {
        ModalContent.querySelector(".Title").style.display = 'block'
        document.querySelector(".left-arrow").style.display = ''
        document.querySelector(".right-arrow").style.display = ''
        ModalContent.querySelector("#searchInput").style.display = 'none'
        ModalContent.querySelector(".Title").innerHTML = elementData[element-1].Name
        ModalContent.querySelector(".basic-info").innerHTML = `
        ${elementData[element-1].Symbol} <br><br>
        -- Origin of Name -- <br>
        ${elementData[element-1].OriginName} <br><br>
        -- Description -- <br>
        ${elementData[element-1].Description} <br><br>
        -- Sources -- <br>
        ${elementData[element-1].Sources} <br><br>
        -- Uses -- <br>
        ${elementData[element-1].Uses} <br><br>
        -- Discovery -- <br>
        People: ${elementData[element-1].Discovery.People} <br>
        Location: ${elementData[element-1].Discovery.Location} <br>
        Year: ${elementData[element-1].Discovery.Year} <br><br>
        `
    }
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