import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status21 = {
  Open: "Open",
  UnderReview: "UnderReview",
  Resolved: "Resolved",
  Closed: "Closed",
} as const;
export type Status21 = (typeof Status21)[keyof typeof Status21] | (string & {});

export const status21Schema: EnumSchema<Status21> = s.enumOf<Status21>(Status21);
