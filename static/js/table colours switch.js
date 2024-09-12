document.querySelector('.switch').addEventListener('input', function (event) {
    const elements = document.querySelectorAll(".element")
    elements.forEach(element => {
        if(element.innerHTML){
            currElementNumber = parseInt(element.querySelector(".atomic_number").innerHTML)
            var block = getData(currElementNumber)["Block"]
            element.classList.toggle(`block-${block}`)
        }
    });
});