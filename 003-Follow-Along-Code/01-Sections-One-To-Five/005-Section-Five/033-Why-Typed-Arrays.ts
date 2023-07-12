const carMakers = ['ford', 'toyota', 'chevy'];
const newDates = [new Date(), new Date()];

// Help with Inference when extracting values

const car: string = carMakers[0];
const myCar: string | undefined = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); // Cannot assign an umber which is supposed to be a string.

// Help with 'map'
carMakers.map((car: string): string => {
    car.toUpperCase();
    return car;
});