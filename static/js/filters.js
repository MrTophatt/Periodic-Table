const category_checkbox = document.querySelector('.category_checkbox').querySelectorAll("input");
var category_list = []
category_checkbox.forEach((x, i) => {
    x.oninput = () => {
        if(x.checked) {
            category_list.push(x.value)
        } else {
            category_list.pop(x.value)
        }
        console.log(category_list)
    }
})

const diatomicCheckbox = document.querySelector('#diatomicCheckbox');
const monatomicCheckbox = document.querySelector('#monatomicCheckbox');

const syntheticCheckbox = document.querySelector('#syntheticCheckbox');
const naturalCheckbox = document.querySelector('#naturalCheckbox');

const solidCheckbox = document.querySelector('#solidCheckbox');
const liquidCheckbox = document.querySelector('#liquidCheckbox');
const gasCheckbox = document.querySelector('#gasCheckbox');

const modal = document.getElementById("myModal");
const ModalContent = modal.querySelector(".modal-content")
const element_block = ModalContent.querySelector(".basic-info")

const inputs = document.querySelector(".filters").querySelectorAll("input")
inputs.forEach(input => {
    if(input.type==="checkbox") {
        input.addEventListener("input", () => {
            GenerateElementList(
                [solidCheckbox.checked ? "Solid" : null, liquidCheckbox.checked ? "Liquid" : null, gasCheckbox.checked ? "Gas" : null].filter(n => n), 
                category_list, 
                syntheticCheckbox.checked===naturalCheckbox.checked ? null : syntheticCheckbox.checked, 
                diatomicCheckbox.checked===monatomicCheckbox.checked ? null : diatomicCheckbox.checked
            ) // Filter
        });
        
    } else if(input.type==="button") {
        input.addEventListener("click", () => {
            category_checkbox.forEach((x, i) => {
                x.checked=false
            })
            category_list=[]
            GenerateElementList(
                category=category_list
            ) // Filter
        });
    }
});