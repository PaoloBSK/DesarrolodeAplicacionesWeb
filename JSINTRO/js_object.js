let user = {
    name: "Luis",
    age: 200,
    //toString(){
    //    return `{name: ${this.name}}`
    //}
}
//console.log("user", user.toString())
//Template Literals
let TemplateLiteral = `Hello there my name is ${user.name} and 1 + 1 = ${1 + 1}`
console.log("TemplateLiteral", TemplateLiteral)
// stringify es de jason a sting
let json = JSON.stringify(user);
console.log("json", json)
let unparedJson = '{"name":"Luis","age":200}'; /// de string a jason
let  newuser = JSON.parse(unparedJson);
console.log('newUser.name', newuser.name);