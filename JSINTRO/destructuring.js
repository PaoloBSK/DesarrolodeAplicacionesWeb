let arr = ["Luis", "Esteban", "Haro"]
//cont firstName = arr[0]
//cont lastName = arr[1]

const [ firstName, lastName] = arr;
//console.log("firstName, LastName", firstName, lastName)

let ar2 = ["luis", "Esteban", "Haro"]
//cont firstName = arr[0]
//cont lastName = arr[1]

//const [firstName2, ,lastName2] = arr2;
//console.log("My new vars", firstName2, lastName2)

let(a,b,c) = "xyz"
let= new Set((1,2,3)) //set no acepta numeros repetidos
let[one, two, three] = mySet;
//console.log("mySet", mySet)

let user = {
    userName: "Luis",
    userLastName: "Haro",
    userPhone: "4"
}
const {userName} = user;
console.log("user Name", userName)

const {userLastName : apellido, userPhone = "555555555"} = user;
//const apellido = user.userLastName
console.log("apellido", apellido)
console.log("userPhone", userPhone)

const user2 ={
    //spread operator
    ...user,
    userName: "Jose",
    nationality: "Mex"

}
console.log("user2", user2)

const { nationality, ...rest} = user2;
console.log("rest",rest)

const item = {
    itemName: "Casa",
    itemDescription: {
        size: 14,
        color: "red"
    }
}
const{itemDescription: {size, color: clr}} =item;
console.log("size", size)
console.log("clr", clr)

const myFunction = ({itemName}) => {
    console.log("itemName", itemName)
}
console.log("myFunction(user)", myFunction(item))