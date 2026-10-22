import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gmvSchema, type Gmv } from "./gmv.js";

export type Stats = {
  gmv?: Gmv;
  pageViews?: string;
  orders?: string;
  conversionRate?: string;
  totalUnits?: string;
};

export const statsSchema: Schema<Stats> = s.object<Stats>({
  gmv: s.optional(s.lazy(() => gmvSchema)),
  pageViews: s.optional(s.string()),
  orders: s.optional(s.string()),
  conversionRate: s.optional(s.string()),
  totalUnits: s.optional(s.string()),
});
