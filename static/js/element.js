function getData(x) {
    const data = window.exports["elementData"]
    if (typeof x === "number") {
        return data[x - 1]; // 1-based index
    } else if (typeof x === "string") {
        return data.find(element => 
            element.Symbol === x || element.Name === x
        );
    }
}

function filterElements({
    stateOfMatter=[], 
    category=[], 
    manmade=null, 
    diatomic=null, 
    massRange=[0, Infinity], 
    densityRange=[0, Infinity]
} = {}) {
    const data = window.exports["elementData"]
    return data.filter(element => {
        return (
            (stateOfMatter.length === 0 || stateOfMatter.includes(element.StateOfMatter)) &&
            (category.length === 0 || category.includes(element.Category)) &&
            (manmade === null || element.ManMade === manmade) &&
            (diatomic === null || element.Diatomic === diatomic) &&
            (element.Mass >= massRange[0] && element.Mass <= massRange[1]) &&
            (element.Density >= densityRange[0] && element.Density <= densityRange[1])
        );
    });
}