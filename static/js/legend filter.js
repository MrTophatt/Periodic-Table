const legend = document.querySelectorAll(".category, .stateOfMatter")
let activeFilter = null;

legend.forEach(legendFilter => {
    legendFilter.onclick = function(){
        const elements = document.querySelectorAll(".element")
        const filterClass = legendFilter.className.split(" ")[1] || legendFilter.innerHTML;

        if (activeFilter === filterClass) {
            activeFilter = null;
        } else {
            activeFilter = filterClass;
        }

        elements.forEach(x => x.classList.remove("highlight"));

        if (activeFilter) {
            elements.forEach(x => {
                if (x.className.split(" ").includes(activeFilter) || x.children[1]?.classList[0].includes(activeFilter)) {
                    x.classList.add("highlight");
                }
            });
        }
    }
});