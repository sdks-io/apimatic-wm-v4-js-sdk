import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This is applicable only for promotions */
export const ProcessMode = {
  Upsert: "UPSERT",
  Delete: "DELETE",
} as const;
export type ProcessMode = (typeof ProcessMode)[keyof typeof ProcessMode] | (string & {});

export const processModeSchema: EnumSchema<ProcessMode> = s.enumOf<ProcessMode>(ProcessMode);
