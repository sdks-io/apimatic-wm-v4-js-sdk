import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderItemDisposition = {
  Sellable: "Sellable",
  Unsellable: "Unsellable",
} as const;
export type OrderItemDisposition =
  | (typeof OrderItemDisposition)[keyof typeof OrderItemDisposition]
  | (string & {});

export const orderItemDispositionSchema: EnumSchema<OrderItemDisposition> =
  s.enumOf<OrderItemDisposition>(OrderItemDisposition);
