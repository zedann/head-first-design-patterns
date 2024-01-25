"use strict";
class WeatherStation {
    constructor() {
        this.observers = new Set();
        this.temperature = 30;
    }
    add(observer) {
        this.observers.add(observer);
    }
    remove(observer) {
        this.observers.delete(observer);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update();
        }
    }
    getTemperature() {
        return this.temperature;
    }
    setTemperature(temp) {
        this.temperature = temp;
        this.notify();
    }
}
class PhoneDisplay {
    constructor(station) {
        this.valueOnDisplay = 10;
        this.station = station;
    }
    update() {
        this.valueOnDisplay = this.station.getTemperature();
    }
    display() {
        console.log(this.valueOnDisplay);
    }
}
const station = new WeatherStation();
const phoneDisplay = new PhoneDisplay(station);
station.add(phoneDisplay);
station.setTemperature(20);
phoneDisplay.display();
