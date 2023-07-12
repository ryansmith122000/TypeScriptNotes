const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

// we created our type 'drink'.
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40]; // array
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
