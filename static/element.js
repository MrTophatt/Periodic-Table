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
                element.Symbol === x
            })
        }
    }

    filter(stateOfMatter=[], category=[]) {
        let temp = this.data.filter(element => {
            if ((stateOfMatter.length != 0) && (category.length != 0)) return stateOfMatter.includes(element.StateOfMatter) && category.includes(element.Category)
            else if (stateOfMatter.length != 0) return stateOfMatter.includes(element.StateOfMatter)
            else if (category.length != 0) return category.includes(element.Category)
            else return element
        }) 
        if(temp.length == 0) return "No Element Found"
        else return temp
    }
}