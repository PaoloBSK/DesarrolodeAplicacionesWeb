/* const add = (num1, num2) => {//prueba una pequeña parte unitaria de codigo para ver si da o no funciona
    return num1 + num2;
}

test("It works", () =>{
    const result = add(1,2);
    expect(result).toBe(3);
})
test("It Fails", () =>{
    const result = add(1,2);
    expect(result).toNotBe(5);
}) */
const condition = false
const value1 = 1;
const value2 = 2;

/* let result;

if (condition){ //verificr resuktados
    result = 3;
} else{
    result = 0;
} */

let result = condition ==  true ? 3 : 0; // ver si se cumple la condicion si el resultado es  true es 3 si no es 0
console.log("result", result)

//multiple conditions
const age = 18
let message = (age < 3) ? "hello there you small one":
    (age < 18) ? "hello":
    (age < 100) ? "ohh wow":
    "Error not valid age";
