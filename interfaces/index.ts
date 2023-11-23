export interface Person {
  name: string,
  age: number,
  phone: {
    ctryCode: string,
    no: number
  },
  roles: [ number, string ],
  hobbies: mixAndmatch,
  marks: string | number
}

type mixAndmatch =  Array<{}>
