import "mocha";
import {expect} from "chai";
import {hello} from "../src/exercise-1";

describe("add function tests", () => {
  it("hello('Hola') return Hola", () => {
    expect(hello('Hola')).to.be.equal(undefined);
  });
});
