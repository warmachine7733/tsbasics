import { Person } from "./interfaces/index"

const person : Person = {
    name: "prateek",
    age: 29,
    phone: {
        ctryCode: "+91",
        no: 7008787878
    }
}
const result: string = "the person is:"
console.log(result, person)