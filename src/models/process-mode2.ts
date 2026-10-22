import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProcessMode2 = {
  Upsert: "UPSERT",
  Delete: "DELETE",
} as const;
export type ProcessMode2 = (typeof ProcessMode2)[keyof typeof ProcessMode2] | (string & {});

export const processMode2Schema: EnumSchema<ProcessMode2> = s.enumOf<ProcessMode2>(ProcessMode2);
