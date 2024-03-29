const name: string = "Richard";

const age: number = 37;
let hasAccess: false = false

type User = {
    name: string,
    age: number,
    hasPassword?: boolean
}
//Union
type Permission = "Read" | "Write" | "View"

type AdminAccess = {
    hasAdminAccess:boolean,
    permissions: Permission[]
}

//mapped types
type AgelessUser = Omit<User,'age'>


type UserKeys = keyof User;

const userKeys: UserKeys = "hasPassword" 

//intersection type
type AdminUser = User & AdminAccess

const user: AdminUser =  {
  age: 20,
  name: "Rick",
  hasAdminAccess: true,
  permissions: ["Read", "Write"]
}

const ageless:AgelessUser = {
    name: "Test",
    hasPassword: false
}

// function getValue<SomeObject>(object:SomeObject, key: keyof SomeObject) {
//     return object[key]
// }
//this is the return type
const add = (a:number, b:number): number | undefined | null=> {
    if(a > 100) return undefined;
    if (a < 10) return null;
    return a + b;
}

const result = add(10,20);

const getValue = <SomeObject, Key extends keyof SomeObject> (object: SomeObject, key:Key) : SomeObject[Key]  => {
  return object[key]
}

const val = getValue(user, "age")
