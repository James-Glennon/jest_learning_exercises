function addition(num1,num2){
    return(typeof(num1 + num2) === "number"? num1 + num2: NaN)
}

module.exports = addition;