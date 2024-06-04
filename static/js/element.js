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

    filter(stateOfMatter=[], category=[], manmade=null) {
        let temp = this.data.filter(element => {
            console.log(element.ManMade)
            return (stateOfMatter.length!=0 ? stateOfMatter.includes(element.StateOfMatter) : true) && 
            (category.length!=0 ? category.includes(element.Category) : true) && 
            (manmade===null || element.ManMade == manmade ? true : false)
        }) 
        return temp
    }
}