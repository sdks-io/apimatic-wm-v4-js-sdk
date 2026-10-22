import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneyTypeSchema, type MoneyType } from "./money-type.js";
import { rebateTypeSchema, type RebateType } from "./rebate-type.js";

export type Rebate = {
  rebateAmt: MoneyType;
  infoUrl?: string;
  rebateType?: RebateType;
  startDate?: Date;
  endDate?: Date;
};

export const rebateSchema: Schema<Rebate> = s.object<Rebate>({
  rebateAmt: moneyTypeSchema,
  infoUrl: s.optional(s.string()),
  rebateType: s.optional(s.lazy(() => rebateTypeSchema)),
  startDate: s.optional(s.dateTime()),
  endDate: s.optional(s.dateTime()),
});
