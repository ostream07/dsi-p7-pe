import "mocha";
import {expect} from "chai";
import {Solver} from "../src/exercise/strategy";
import {Bubble} from "../src/exercise/bubble";


describe("execute function tests", () => {
  const mySolver = new Solver([1, 3, 2, 4], new Bubble());
  it("execute(1, 3, 2, 4) return 1, 2, 3, 4", () => {
    expect(mySolver.logic()).to.be.equal(undefined);
  });
});

