const hre = require("hardhat");
const { assert } = require("chai");

describe("VerifySum circuit", () => {
  let circuit;

  const sampleInput = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  };
  const sanityCheck = true;

  before(async () => {
    circuit = await hre.circuitTest.setup("verify-sum");
  });

  it("produces a witness with valid constraints", async () => {
    const witness = await circuit.calculateWitness(sampleInput, sanityCheck);
    await circuit.checkConstraints(witness);
  });

  it("has the correct output", async () => {
    const expected = { out: 55 };
    const witness = await circuit.calculateWitness(sampleInput, sanityCheck);

    await circuit.assertOut(witness, expected);
  });
});
