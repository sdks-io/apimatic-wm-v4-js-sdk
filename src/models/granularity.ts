import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Granularity = {
  Hour: "Hour",
  Day: "Day",
  Week: "Week",
  Month: "Month",
  Year: "Year",
  Total: "Total",
} as const;
export type Granularity = (typeof Granularity)[keyof typeof Granularity] | (string & {});

export const granularitySchema: EnumSchema<Granularity> = s.enumOf<Granularity>(Granularity);
