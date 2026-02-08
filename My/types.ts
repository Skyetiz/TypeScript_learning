// Basic Types
let num: number = 1
let str: string = "Hello, TypeScript!"
let bool: boolean = true
let nullValue: null = null
let undefinedValue: undefined = undefined
let symbolValue: symbol = Symbol("unique")

console.log(num, str, bool, nullValue, undefinedValue, symbolValue)

// Array
let numArray: number[] = [1, 2, 3]
let strArray: Array<string> = ["a", "b", "c"]
let arr: (number | string)[] = [1, "two",3]
console.log(numArray)
console.log(arr)

// Tuple
let tupleValue:[number, string] = [1, "Hello"]      
// Enum
enum Color {
    Red,
    Green,
    Blues
}
let color:Color = Color.Green

// Any
let anyValue:any = "This can be any type"
anyValue = 42  

// Void
function logMessage(message:string):void {
    console.log(message)
}   

// Never
function throwError(message:string):never {
    throw new Error(message)
}