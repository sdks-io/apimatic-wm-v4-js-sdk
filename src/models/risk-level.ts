import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Risk level as per Walmart standards */
export const RiskLevel = {
  MeetsStandard: "Meets standard",
  Monitor: "Monitor",
  Urgent: "Urgent",
} as const;
export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel] | (string & {});

export const riskLevelSchema: EnumSchema<RiskLevel> = s.enumOf<RiskLevel>(RiskLevel);
