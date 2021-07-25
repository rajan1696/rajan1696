let a=10;

function fn(){
    console.log("hello how are you")
    return "Rajan"
}

function notTobeexports()
{
    console.log("I dont want to exported")

}

module.exports={
    varName:a,

    fxn:fn
}

let libexportOBJ=require("./lib")

console.log("i am client file")

console.log(libexportOBJ.varName)

console.log(libexportOBJ.fxn())