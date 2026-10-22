import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shipNodes2Schema, type ShipNodes2 } from "./ship-nodes2.js";

export type Inventory3 = {
  /** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
  sku?: string;
  shipNodes?: ShipNodes2[];
};

export const inventory3Schema: Schema<Inventory3> = s.object<Inventory3>({
  sku: s.optional(s.string()),
  shipNodes: s.optional(s.array(s.lazy(() => shipNodes2Schema))),
});
