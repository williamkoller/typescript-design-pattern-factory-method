import { CarFactory } from './factories/car.factory';
import { randomCar } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();

const customerNames = ['William', 'Barbara', 'Marli'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCar();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();

  const newCar = carFactory.pickUp(name, `new car ${randomNumbers(100)}`);
  newCar.stop();

  console.log('----##----');
}
