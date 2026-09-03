import test from "node:test";
import assert from "node:assert/strict";
import { getDiagnosis, leakageEstimate, normalizeSelections } from "../src/data.js";
test("matched symptom and cause gain synergy", () => {
  const result = getDiagnosis(["QUOTE_GHOST"], ["EARLY_PRICE"]);
  assert.equal(result.code, "VALUE_LEAK");
  assert.equal(result.score.VALUE_LEAK, 7);
});
test("the first selected cause breaks a valid tie", () => {
  assert.equal(getDiagnosis(["ASK_GHOST", "QUOTE_GHOST"], ["NO_GUIDANCE", "EARLY_PRICE"]).code, "CONVERSATION_LEAK");
});
test("the first symptom breaks a tie without causes", () => {
  assert.equal(getDiagnosis(["PRICE_OBJECTION", "QUOTE_GHOST"], []).code, "OBJECTION_LEAK");
});
test("limits selection and estimates conversations only", () => {
  assert.deepEqual(normalizeSelections(["A", "A", "B", "C"], ["A", "B", "C"]), ["A", "B"]);
  assert.equal(leakageEstimate(100, 40), 40);
});
