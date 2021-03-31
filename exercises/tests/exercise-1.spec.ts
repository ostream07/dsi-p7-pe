/* eslint-disable max-len */
import "mocha";
import {expect} from "chai";
import {DistanceUnits, Distance} from "../src/exercise2/distance";
import {TemperatureUnits, Temperature} from "../src/exercise2/temperature";
import {TimeUnits, Time} from "../src/exercise2/time";
import {SpeedUnits, Speed} from "../src/exercise2/speed";


describe("distance class tests", () => {
  it("conversion('mm, 10, m') return 0.010", () => {
    const distances = new Distance();
    expect(distances.conversion([DistanceUnits.mm, 10, DistanceUnits.m])).to.be.equal(0.010);
  });
  it("conversion('km, 15, m') return 15000", () => {
    const distances = new Distance();
    distances.conversion([DistanceUnits.km, 15, DistanceUnits.m]);
    expect(distances.conversion([DistanceUnits.km, 15, DistanceUnits.m])).to.be.equal(15000);
  });
  it("conversion('km, 7, dm') return Error", () => {
    const distances = new Distance();
    expect(distances.conversion([DistanceUnits.km, 7, DistanceUnits.dm])).to.be.equal(-1);
  });
});

describe("temperature class tests", () => {
  it("conversion('celsius, 10, kelvin') return 283", () => {
    const grades = new Temperature();
    expect(grades.conversion([TemperatureUnits.celsius, 10, TemperatureUnits.kelvin])).to.be.equal(283);
  });
  it("conversion('celsius, 10, fahrenheit') return 50", () => {
    const grades = new Temperature();
    expect(grades.conversion([TemperatureUnits.celsius, 10, TemperatureUnits.fahrenheit])).to.be.equal(50);
  });
  it("conversion('celsius, 10, fahrenheit') return Error", () => {
    const grades = new Temperature();
    expect(grades.conversion([TemperatureUnits.kelvin, 10, TemperatureUnits.fahrenheit])).to.be.equal(-1);
  });
});

describe("time class tests", () => {
  it("conversion('min, 10, seg') return 600", () => {
    const times = new Time();
    expect(times.conversion([TimeUnits.min, 10, TimeUnits.seg])).to.be.equal(600);
  });
  it("conversion('day, 2, seg') return 172800", () => {
    const times = new Time();
    expect(times.conversion([TimeUnits.day, 2, TimeUnits.seg])).to.be.equal(172800);
  });
  it("conversion('min, 10, day') return Error", () => {
    const times = new Time();
    expect(times.conversion([TimeUnits.min, 10, TimeUnits.day])).to.be.equal(-1);
  });
});

describe("speed class tests", () => {
  it("conversion('nu, 10, ms') return 19.4384", () => {
    const velocity = new Speed();
    expect(velocity.conversion([SpeedUnits.nu, 12, SpeedUnits.ms])).to.be.equal(23.32608);
  });
  it("conversion('ms, 5, pps') return 1.5239 * 10^-3", () => {
    const velocity = new Speed();
    expect(velocity.conversion([SpeedUnits.ms, 5, SpeedUnits.pps])).to.be.equal(0.0015239256324291375);
  });
  it("conversion('pps, 10, kmh') return Error", () => {
    const velocity = new Speed();
    expect(velocity.conversion([SpeedUnits.pps, 12, SpeedUnits.kmh])).to.be.equal(-1);
  });
});

