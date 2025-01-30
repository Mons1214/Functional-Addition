const suma = (a, b) => {
    return a+b 
}

console.log(suma(3,4))

const sumaSegunda = (a) => {
    return a+4
}
console.log(sumaSegunda(3))
console.log(sumaSegunda(10))

const sumaFactory = (a) => {
    return (b)=>{
        return (a+b)
    }
}

const sumaTercera = sumaFactory(10)
console.log(sumaTercera(6))
console.log(sumaTercera(20))

const sumaCuarta = sumaFactory(1000)
console.log(sumaCuarta(5))



