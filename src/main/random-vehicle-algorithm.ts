import { BicycleFactory } from '../factories/bicycle.factory';
import { CarFactory } from '../factories/car.factory';
import { randomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle.interface';

export function randomCar(): Vehicle {
  const carFactory = new CarFactory();
  const carOne = carFactory.getVehicle('Fusca');
  const carTwo = carFactory.getVehicle('Celta');
  const bicycleFactory = new BicycleFactory();
  const bicycle = bicycleFactory.getVehicle('Bicycle');
  const cars = [carOne, carTwo, bicycle];
  return cars[randomNumbers(cars.length)];
}
