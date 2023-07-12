const newJson = ' { "x": 10, "y": 20 } '
const newCoordinates: {x: number; y: number; } = JSON.parse(newJson)
console.log(newCoordinates); // prints { "x": 10, "y": 20 }


