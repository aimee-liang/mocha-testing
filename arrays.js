let arrays = {}

arrays.length = arr => {
    if (!arr.length){
        return undefined
    }
    return arr.length
}

arrays.isItAnArray = arr => {
    if (!Array.isArray(arr)){
        return undefined
    }
    return Array.isArray(arr)
}

module.exports = arrays