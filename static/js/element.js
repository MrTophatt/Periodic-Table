class Elements {
    constructor(data){
        this.data = data
    }

    getData(x) {
        if (typeof x === "number"){
            return this.data[x-1]
        }
        else if (typeof x === "string"){
            return this.data.find(element => {
                element.Symbol === x || element.Name === x
            })
        }
    }

    filter(stateOfMatter=[], category=[], manmade=null, diatomic=null, massRange=[0, Infinity], densityRange=[0, Infinity]) {
        let temp = this.data.filter(element => {
            return (stateOfMatter.length!=0 ? stateOfMatter.includes(element.StateOfMatter) : true) && 
            (category.length!=0 ? category.includes(element.Category) : true) && 
            (manmade===null || element.ManMade == manmade ? true : false) &&
            (diatomic===null || element.Diatomic == diatomic ? true : false) &&
            (element.Mass >= massRange[0] && element.Mass <= massRange[1]) &&
            (element.Density >= densityRange[0] && element.Density <= densityRange[1])
        }) 
        return temp
    }
}