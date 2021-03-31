/* eslint-disable max-len */
import "mocha";
import {expect} from "chai";
import {MagnitudeUnits, Distance} from "../src/exercise2/distance";

describe("distance function tests", () => {
  it("conversion('mm, 10, m') return 0.010", () => {
    const distances = new Distance();
    distances.conversion([MagnitudeUnits.mm, 10, MagnitudeUnits.m]);
    expect(distances.conversion([MagnitudeUnits.mm, 10, MagnitudeUnits.m])).to.be.equal(0.010);
  });
  it("conversion('km, 15, m') return 15000", () => {
    const distances = new Distance();
    distances.conversion([MagnitudeUnits.km, 15, MagnitudeUnits.m]);
    expect(distances.conversion([MagnitudeUnits.km, 15, MagnitudeUnits.m])).to.be.equal(15000);
  });
  it("conversion('km, 7, dm') return Error, conversor a metros y no se especifican metros en ningún parámetro", () => {
    const distances = new Distance();
    distances.conversion([MagnitudeUnits.km, 7, MagnitudeUnits.dm]);
    expect(distances.conversion([MagnitudeUnits.km, 7, MagnitudeUnits.dm])).to.be.equal(-1);
  });
});
