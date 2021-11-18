const toys = [
    {
        id: 1,
        name: "a deck of playing cards",
        maker: "United States Playing Card Company",
        price: 3,
        weight: .21,
        color: "red and white"
    },
    {
        id: 2,
        name: "Storm Pegasus",
        maker: "Hasbro",
        price: 8,
        weight: .78,
        color: "blue"
    },
    {
        id: 3,
        name: "Chucky",
        maker: "Symbiote Studios",
        price: 20,
        weight: 3.2,
        color: "tan"
    }
]

const basketball = {
    name: "a basketball",
    maker: "Wilson",
    price: 15,
    weight: 2.3,
    color: "brown"
}

const soccerBall = {
    name: "soccer ball",
    maker: "Nike",
    price: 15,
    weight: 2,
    color: "white"
}

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addToyToInventory(basketball) 

for (const toy of toys) {
    console.log(`The price for ${toy.name} is $${toy.price}.`)
}

console.log(toys)