import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This is applicable only for promotions */
export const ReplaceAll = {
  True: "true",
  False: "false",
} as const;
export type ReplaceAll = (typeof ReplaceAll)[keyof typeof ReplaceAll] | (string & {});

export const replaceAllSchema: EnumSchema<ReplaceAll> = s.enumOf<ReplaceAll>(ReplaceAll);
