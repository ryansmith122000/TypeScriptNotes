interface Vehicle {
    name: string;
    year: Date;
    runs: boolean;
    summary(): string;
};

const oldCivic = {
    name: 'civic',
    year: new Date(),
    runs: true,
    summary(): string {
        return `Name is: ${this.name} Year is: ${this.year} Does it run?: ${this.runs}`;
    },
};

const printVehicle = ( vehicle: Vehicle ): void => {
    console.log(vehicle.summary);
};

printVehicle(oldCivic);

interface Reportable {
    summary(): string;
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar}g of sugar.`;
    },
};
    // both drink and newVehicle are Reportable type
const newVehicle = {
    name: 'tesla',
    year: new Date(),
    runs: true,
    summary(): string {
        return `Name is: ${this.name} Year is: ${this.year} Does it run?: ${this.runs}`;
    },
};

const printSummary = (item: Reportable): void => {
    console.log(item);
};

printSummary(newVehicle);
printSummary(drink);

// if an interface is generic, it can be reused for different objects. newVehicle and drink are not closely related except for a summary, which allows them to have the reportable type.


