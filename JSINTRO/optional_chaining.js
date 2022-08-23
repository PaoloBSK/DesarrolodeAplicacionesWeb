//JSON = javaScript object Notation
let user = {}
console.log("user", user)

user = {
    address:{}
}
user ={
    addres: {
        street: "Random Street Value"
    }
}

console.log("user", user)
console.log("colony", user,addres,colony?.municipality)
user ={
    addres: {
        street: "Random Street Value",//para declarar diferentes atributos se debe poner coma
        colony: {
            municipality: "1"
        }
    }
}
console.log("colony", user,addres,colony?.municipality)