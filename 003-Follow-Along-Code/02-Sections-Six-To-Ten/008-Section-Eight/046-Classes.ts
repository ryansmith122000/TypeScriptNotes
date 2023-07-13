class VehicleClass {

    constructor(public color: string) { // this will generate a color property with the type of string.
    }

    protected honk(): void {
        console.log('beep');
    }
};

const vehicle = new VehicleClass('orange');
console.log(vehicle.color)

class Car extends VehicleClass { // this adds all of VehicleClass's properties to Car.

    constructor(public wheels: number, color: string){
        super('blue');
    }

    startDrivingProcess(): void {
        this.honk();
    };
}

const car = new Car(4, 'blue');
car.startDrivingProcess();
