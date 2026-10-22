import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * To apply a range filter based on the predefined parameter. <br><b style='color:green;'>Market
 * availability: US | CA | MX</span></b>
 *
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | PRICE | To filter based on the price. | string |
 */
export const Parameter21 = {
  Price: "PRICE",
} as const;
export type Parameter21 = (typeof Parameter21)[keyof typeof Parameter21] | (string & {});

export const parameter21Schema: EnumSchema<Parameter21> = s.enumOf<Parameter21>(Parameter21);
