import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the frequency at which the report should be generated. For example, if set to YEARLY,
 * the report will be generated once every year.
 */
export const Frequency = {
  Hourly: "HOURLY",
  Daily: "DAILY",
  Weekly: "WEEKLY",
  Monthly: "MONTHLY",
  Yearly: "YEARLY",
} as const;
export type Frequency = (typeof Frequency)[keyof typeof Frequency] | (string & {});

export const frequencySchema: EnumSchema<Frequency> = s.enumOf<Frequency>(Frequency);
