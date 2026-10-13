import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";

export type SettlementPeriod = {
  periodId?: string;
  startDate?: Date;
  endDate?: Date;
  status?: Status2;
};

export const settlementPeriodSchema: Schema<SettlementPeriod> = s.object<SettlementPeriod>({
  periodId: s.optional(s.string()),
  startDate: s.optional(s.dateTime()),
  endDate: s.optional(s.dateTime()),
  status: s.optional(s.lazy(() => status2Schema)),
});
