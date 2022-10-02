declare module 'lodash' {
    function multiply(multiplier: number, multiplicand: number): number

    // //function overload method:
    // function reverse(array: string[]):string[]
    // function reverse(array: number[]):number[]

    //generic typing method:
    function reverse<Type>(array:Type[]):Type[]
    function dropRight(array:(string|number)[], dropNum:number):(string|number)[]
}