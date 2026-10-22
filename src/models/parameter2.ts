import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * To apply a range filter based on the predefined parameter.
 *
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | PRICE | To filter based on the price. | string |
 */
export const Parameter2 = {
  Price: "PRICE",
} as const;
export type Parameter2 = (typeof Parameter2)[keyof typeof Parameter2] | (string & {});

export const parameter2Schema: EnumSchema<Parameter2> = s.enumOf<Parameter2>(Parameter2);
