import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export const Op2 = {
  Equals: "equals",
  Between: "between",
} as const;
export type Op2 = (typeof Op2)[keyof typeof Op2] | (string & {});

export const op2Schema: EnumSchema<Op2> = s.enumOf<Op2>(Op2);
