import * as types from "./interfaces/index"

const person : types.Person = {
    name: "prateek",
    age: 29,
    phone: {
        ctryCode: "+91",
        no: 7008787878
    },
    roles: [1, "admin"],
    hobbies: ["games", "gym", {"x":"1"}],
    marks: "90"
}
const result: string = "the person is:"
console.log(result, person)