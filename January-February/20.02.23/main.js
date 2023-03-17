const data = [{
        name: "A",
        age: 25
    },
    {
        name: "D",
        age: 27
    },
    {
        name: "E",
        age: 24
    },
    {
        name: "B",
        age: 25
    },
    {
        name: "C",
        age: 26
    }
]

// const numbers = [10, 50, 30, 20, 40, 11, 22]
// const text = ["Nahid", "Nazim", "Hasnat", "Fuad", "Ibrahim"]

// const sortedData = numbers.sort((a, b) => a - b)

// const sortedData = data.sort((a, b) => b.age - a.age);
function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}


const sortedData = data.sort(compare);

console.log(sortedData);