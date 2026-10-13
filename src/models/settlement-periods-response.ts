import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { settlementPeriodSchema, type SettlementPeriod } from "./settlement-period.js";

export type SettlementPeriodsResponse = {
  nextToken?: string;
  periods?: SettlementPeriod[];
};

export const settlementPeriodsResponseSchema: Schema<SettlementPeriodsResponse> =
  s.object<SettlementPeriodsResponse>({
    nextToken: s.optional(s.string()),
    periods: s.optional(s.array(s.lazy(() => settlementPeriodSchema))),
  });
