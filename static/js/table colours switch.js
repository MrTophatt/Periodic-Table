document.querySelector('.switch').addEventListener('input', function (event) {
    const El = window.exports["El"]
    const elements = document.querySelectorAll(".element")
    elements.forEach(element => {
        if(element.innerHTML){
            currElementNumber = parseInt(element.querySelector(".atomic_number").innerHTML)
            var block = El.getData(currElementNumber)["Block"]
            element.classList.toggle(`block-${block}`)
        }
    });
});