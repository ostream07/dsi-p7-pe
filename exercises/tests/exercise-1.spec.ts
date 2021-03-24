import "mocha";
import {expect} from "chai";
import {hello} from "../src/exercise1/speed";

describe("add function tests", () => {
  it("hello('Hola') return Hola", () => {
    expect(hello('Hola')).to.be.equal(undefined);
  });
});
