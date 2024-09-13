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
    diatomic=null
} = {}) {
    const data = window.exports["elementData"]
    return data.filter(element => {
        return (
            (stateOfMatter.length === 0 || stateOfMatter.includes(element.StateOfMatter)) &&
            (category.length === 0 || category.includes(element.Category)) &&
            (manmade === null || element.ManMade === manmade) &&
            (diatomic === null || element.Diatomic === diatomic)
        );
    });
}