import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the shipping is free for a recommended item which is a buy box winner. <br><b
 * style='color:green;'>Market availability: US | CA | MX</span></b>
 */
export const FreeShipping = {
  Yes: "YES",
  No: "NO",
} as const;
export type FreeShipping = (typeof FreeShipping)[keyof typeof FreeShipping] | (string & {});

export const freeShippingSchema: EnumSchema<FreeShipping> = s.enumOf<FreeShipping>(FreeShipping);
