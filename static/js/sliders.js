function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#008cba', controlSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}
    
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#008cba', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
    }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#008cba', toSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromInput.value = from;
    }
}

function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#008cba', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
        toSlider.value = from;
    }
}

function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
        to right,
        ${sliderColor} 0%,
        ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
        ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
        ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
        ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
        ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
    if (Number(currentTarget.value) <= 0 ) {
        currentTarget.style.zIndex = 2;
    } else {
        currentTarget.style.zIndex = 0;
    }
}

const sliders = document.querySelectorAll('.range_container');
const fromSlider = document.querySelectorAll('#fromSlider');
const toSlider = document.querySelectorAll('#toSlider');
const fromInput = document.querySelectorAll('#fromInput');
const toInput = document.querySelectorAll('#toInput');
const modal = document.getElementById("myModal");
const ModalContent = modal.querySelector(".modal-content")
const element_block = ModalContent.querySelector(".basic-info")

sliders.forEach((x, i) => {
    fillSlider(fromSlider[i], toSlider[i], '#C6C6C6', '#008cba', toSlider[i]);
    setToggleAccessible(toSlider[i]);
    fromSlider[i].oninput = () => {
        controlFromSlider(fromSlider[i], toSlider[i], fromInput[i])
        GenerateElementList([], [], null, null, [fromSlider[0].value||0, toSlider[0].value||Infinity], [fromSlider[1].value||0, toSlider[1].value||Infinity]) // Filter
    };
    toSlider[i].oninput = () => {
        controlToSlider(fromSlider[i], toSlider[i], toInput[i])
        GenerateElementList([], [], null, null, [fromSlider[0].value||0, toSlider[0].value||Infinity], [fromSlider[1].value||0, toSlider[1].value||Infinity]) // Filter
    };
    fromInput[i].oninput = () => {
        controlFromInput(fromSlider[i], fromInput[i], toInput[i], toSlider[i])
        GenerateElementList([], [], null, null, [fromSlider[0].value||0, toSlider[0].value||Infinity], [fromSlider[1].value||0, toSlider[1].value||Infinity]) // Filter
    };
    toInput[i].oninput = () => {
        controlToInput(toSlider[i], fromInput[i], toInput[i], toSlider[i])
        GenerateElementList([], [], null, null, [fromSlider[0].value||0, toSlider[0].value||Infinity], [fromSlider[1].value||0, toSlider[1].value||Infinity]) // Filter
    };
})