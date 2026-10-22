import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Sort direction. */
export const Order1 = {
  Asc: "ASC",
  Desc: "DESC",
} as const;
export type Order1 = (typeof Order1)[keyof typeof Order1] | (string & {});

export const order1Schema: EnumSchema<Order1> = s.enumOf<Order1>(Order1);
