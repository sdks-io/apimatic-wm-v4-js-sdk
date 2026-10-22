import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export const ProcessMode6 = {
  Upsert: "UPSERT",
  Delete: "DELETE",
} as const;
export type ProcessMode6 = (typeof ProcessMode6)[keyof typeof ProcessMode6] | (string & {});

export const processMode6Schema: EnumSchema<ProcessMode6> = s.enumOf<ProcessMode6>(ProcessMode6);
