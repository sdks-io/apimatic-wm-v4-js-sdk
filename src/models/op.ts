import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Patch operation type (JSON Patch) */
export const Op = {
  Add: "add",
  Replace: "replace",
  Delete: "delete",
} as const;
export type Op = (typeof Op)[keyof typeof Op] | (string & {});

export const opSchema: EnumSchema<Op> = s.enumOf<Op>(Op);
