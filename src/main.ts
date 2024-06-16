import assert from "node:assert/strict";

const main = async () => {
  assert.equal(1 + 1, 2, "1+1 should equal 2");
  console.log("Passed assert");
};

main();