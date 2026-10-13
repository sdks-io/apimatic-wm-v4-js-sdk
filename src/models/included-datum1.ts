import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludedDatum1 = {
  Summaries: "summaries",
  Attributes: "attributes",
  Issues: "issues",
  Offers: "offers",
  FulfillmentAvailability: "fulfillmentAvailability",
  Procurement: "procurement",
} as const;
export type IncludedDatum1 = (typeof IncludedDatum1)[keyof typeof IncludedDatum1] | (string & {});

export const includedDatum1Schema: EnumSchema<IncludedDatum1> = s.enumOf<IncludedDatum1>(IncludedDatum1);
