var leftArrow = document.querySelector(".left-arrow");
var rightArrow = document.querySelector(".right-arrow");

window.addEventListener("click", function(event) {
    if (event.target === leftArrow) {
        currElementNumber--
        if (currElementNumber < 1){
            currElementNumber = 118
        }
        console.log(currElementNumber)
        showModal(currElementNumber)
    }

    if (event.target === rightArrow) {
        currElementNumber++
        if (currElementNumber > 118){
            currElementNumber = 1
        }
        console.log(currElementNumber)
        showModal(currElementNumber)
    }
});