export const symptomOptions = [
  { id: "ASK_GHOST", diagnosis: "CONVERSATION_LEAK" },
  { id: "QUOTE_GHOST", diagnosis: "VALUE_LEAK" },
  { id: "SHORT_ANSWERS", diagnosis: "CONVERSATION_LEAK" },
  { id: "PRICE_OBJECTION", diagnosis: "OBJECTION_LEAK" },
  { id: "MISSED_FOLLOWUP", diagnosis: "FOLLOWUP_LEAK" },
  { id: "INCONSISTENT_SALES", diagnosis: "TOP_SALES_DEPENDENCY" }
];
export const causeOptions = [
  { id: "SLOW_RESPONSE", diagnosis: "SPEED_LEAK" },
  { id: "EARLY_PRICE", diagnosis: "VALUE_LEAK" },
  { id: "NO_GUIDANCE", diagnosis: "CONVERSATION_LEAK" },
  { id: "WEAK_OBJECTION", diagnosis: "OBJECTION_LEAK" },
  { id: "MEMORY_FOLLOWUP", diagnosis: "FOLLOWUP_LEAK" },
  { id: "LOGIC_NOT_SYSTEMISED", diagnosis: "TOP_SALES_DEPENDENCY" }
];
export const fallbackOrder = ["VALUE_LEAK", "FOLLOWUP_LEAK", "CONVERSATION_LEAK", "OBJECTION_LEAK", "TOP_SALES_DEPENDENCY", "SPEED_LEAK"];
export const diagnoses = {
  VALUE_LEAK: { name: "Value Building Leak", chinese: "Value 建立得太迟。", looksLike: "Quotation 发了，Customer 只剩 Price 可以 Compare，然后静掉。", why: "Price 在 Customer 了解「为什么值得选你」之前就出现。", risk: "广告带来的 Enquiry 变成一张张被比较的数字。", recommendation: "更快 Understand → 更快 Build Value → 再 Move Forward。", features: ["Need Discovery", "Value Matching", "Relevant Material", "Quotation Follow Up"] },
  FOLLOWUP_LEAK: { name: "Follow Up Leak", chinese: "Follow Up 还在靠人记。", looksLike: "有兴趣的 Lead 静掉后，没有被一致地重新接住。", why: "Timing 和内容都靠 Sales 自己记得。", risk: "Intent 冷掉时，团队以为 Customer 没兴趣。", recommendation: "用有 Context、有理由继续的 Follow Up，不是机械追问。", features: ["Smart Follow Up", "Conversation Memory", "Follow-up Rules", "Human Alert"] },
  CONVERSATION_LEAK: { name: "Conversation Guidance Leak", chinese: "Sales 有 Answer，但没有带 Customer 往前走。", looksLike: "Customer 得到答案，却没有一个容易回答的 Next Step。", why: "Conversation 变成 FAQ support，不是 Sales guidance。", risk: "每次 Reply 都正确，但机会还是静静结束。", recommendation: "先 Answer，再 Acknowledge，最后用一个 Relevant Question Guide 下去。", features: ["Relevant Questions", "Conversation Logic", "Needs Discovery", "Next-step Guidance"] },
  OBJECTION_LEAK: { name: "Objection Handling Leak", chinese: "顾虑一来，Conversation 就结束。", looksLike: "「贵」「考虑先」「迟点」之后，Sales 只剩 Discount 或 Okay。", why: "还没理解真正顾虑，就急着解释或放弃。", risk: "本来能处理的不确定，被误当成拒绝。", recommendation: "Validate → Clarify → Answer with context → Agree a low-friction next step。", features: ["Objection Handling", "Knowledge Brain", "Relevant Proof", "Human Handover"] },
  TOP_SALES_DEPENDENCY: { name: "Top Sales Dependency", chinese: "只有少数人知道怎样卖。", looksLike: "同一个 Lead，给不同 Sales，结果完全不同。", why: "提问、判断、Material、Escalation 都在人的脑里。", risk: "团队一扩，Inconsistency 也跟着放大。", recommendation: "Systemise best practice，复杂判断仍然交给 Human。", features: ["Clone Sales Logic", "Knowledge Brain", "Sales Rules", "Human Handover"] },
  SPEED_LEAK: { name: "Response Speed Leak", chinese: "Lead 最热的时候，没有被及时接住。", looksLike: "Team 回覆时，Customer 已经在看其他选择。", why: "Enquiry 跨渠道、在非上班时间进来，或没有即时 Triage。", risk: "Relevance 在 Conversation 开始前已经过期。", recommendation: "先 Catch 和 Triage，再把高意向 Case 连同 Context 交给 Human。", features: ["Lead Catch", "Instant First Response", "Qualification", "Human Alert"] }
};
export function normalizeSelections(items, validIds) { return [...new Set((items || []).filter((item) => validIds.includes(item)))].slice(0, 2); }
export function getDiagnosis(symptoms = [], causes = []) {
  const cleanSymptoms = normalizeSelections(symptoms, symptomOptions.map((item) => item.id));
  const cleanCauses = normalizeSelections(causes, causeOptions.map((item) => item.id));
  const score = Object.fromEntries(fallbackOrder.map((key) => [key, 0]));
  const symptomDiagnosis = cleanSymptoms.map((id) => symptomOptions.find((item) => item.id === id)?.diagnosis).filter(Boolean);
  const causeDiagnosis = cleanCauses.map((id) => causeOptions.find((item) => item.id === id)?.diagnosis).filter(Boolean);
  symptomDiagnosis.forEach((key) => { score[key] += 2; });
  causeDiagnosis.forEach((key) => { score[key] += 3; });
  [...new Set(symptomDiagnosis)].forEach((key) => { if (causeDiagnosis.includes(key)) score[key] += 2; });
  const highest = Math.max(...Object.values(score));
  const tied = fallbackOrder.filter((key) => score[key] === highest);
  const winner = causeDiagnosis.find((key) => tied.includes(key)) || symptomDiagnosis.find((key) => tied.includes(key)) || tied[0];
  return { code: winner, ...diagnoses[winner], score, symptoms: cleanSymptoms, causes: cleanCauses };
}
export function leakageEstimate(enquiries, quietPercent) {
  return Math.round(Math.min(100000, Math.max(0, Number(enquiries) || 0)) * (Math.min(100, Math.max(0, Number(quietPercent) || 0)) / 100));
}
