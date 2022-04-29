let convert = {}

convert.cToF = celsius => {
    if (!Number.isInteger(celsius)){
        return undefined
    }
    return celsius * 9 / 5 + 32
}

convert.fToC = farenheit => {
    if (!Number.isInteger(farenheit)){
        return undefined
    }
    return (farenheit - 32) * 5 / 9
}

module.exports = convert