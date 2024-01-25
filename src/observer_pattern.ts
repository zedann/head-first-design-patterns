interface IObserver {
  update(): void;
}
interface IObservable {
  add(observer: IObserver): void;
  remove(observer: IObserver): void;
  notify(): void;
}
class WeatherStation implements IObservable {
  private observers: Set<IObserver> = new Set();
  private temperature: number = 30;
  add(observer: IObserver): void {
    this.observers.add(observer);
  }
  remove(observer: IObserver): void {
    this.observers.delete(observer);
  }
  notify(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }
  getTemperature(): number {
    return this.temperature;
  }
  setTemperature(temp: number): void {
    this.temperature = temp;
    this.notify();
  }
}
class PhoneDisplay implements IObserver {
  private valueOnDisplay: number;
  private station: WeatherStation;
  constructor(station: WeatherStation) {
    this.valueOnDisplay = 10;
    this.station = station;
  }
  update(): void {
    this.valueOnDisplay = this.station.getTemperature();
  }
  display() {
    console.log(this.valueOnDisplay);
  }
}
const station: WeatherStation = new WeatherStation();
const phoneDisplay: PhoneDisplay = new PhoneDisplay(station);
station.add(phoneDisplay);
station.setTemperature(20);
phoneDisplay.display();
