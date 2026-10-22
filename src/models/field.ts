import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Attribute on which sorting needs to be performed.
 *
 * **Supported Values**: clicks, gmv, orders **Default**: gmv
 */
export const Field = {
  Clicks: "clicks",
  Gmv: "gmv",
  Orders: "orders",
} as const;
export type Field = (typeof Field)[keyof typeof Field] | (string & {});

export const fieldSchema: EnumSchema<Field> = s.enumOf<Field>(Field);
