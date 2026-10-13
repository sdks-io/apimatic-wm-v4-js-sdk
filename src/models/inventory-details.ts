import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { researchingQuantitySchema, type ResearchingQuantity } from "./researching-quantity.js";
import { reservedQuantitySchema, type ReservedQuantity } from "./reserved-quantity.js";
import { unfulfillableQuantitySchema, type UnfulfillableQuantity } from "./unfulfillable-quantity.js";

/** Inventory quantity breakdown for a SKU at a ship node. */
export type InventoryDetails = {
  /**
   * Units currently available to sell at this ship node. Null if the upstream quantity is
   * unavailable.
   */
  fulfillableQuantity?: number | null;
  /**
   * Total units physically at this ship node, including available, reserved, and unfulfillable
   * units. Null if unavailable.
   */
  onHandQuantity?: number | null;
  /** Breakdown of reserved quantities. */
  reservedQuantity?: ReservedQuantity;
  /**
   * Units currently under investigation for discrepancies between expected and physical on-hand
   * counts. Null if no units are under investigation.
   */
  researchingQuantity?: ResearchingQuantity | null;
  /**
   * Units that cannot be fulfilled due to damage, defects, or expiry. Null if no unfulfillable
   * units exist.
   */
  unfulfillableQuantity?: UnfulfillableQuantity | null;
  /**
   * Units for which a shipment has been created but not yet shipped. Null if no data is available.
   */
  inboundWorkingQuantity?: number | null;
  /**
   * Units that have been shipped to the fulfillment center but not yet received. Null if no data is
   * available.
   */
  inboundShippedQuantity?: number | null;
  /** Units that are being received at the fulfillment center. Null if no data is available. */
  inboundReceivingQuantity?: number | null;
};

export const inventoryDetailsSchema: Schema<InventoryDetails> = s.object<InventoryDetails>({
  fulfillableQuantity: s.optionalNullable(s.int()),
  onHandQuantity: s.optionalNullable(s.int()),
  reservedQuantity: s.optional(s.lazy(() => reservedQuantitySchema)),
  researchingQuantity: s.optionalNullable(s.lazy(() => researchingQuantitySchema)),
  unfulfillableQuantity: s.optionalNullable(s.lazy(() => unfulfillableQuantitySchema)),
  inboundWorkingQuantity: s.optionalNullable(s.int()),
  inboundShippedQuantity: s.optionalNullable(s.int()),
  inboundReceivingQuantity: s.optionalNullable(s.int()),
});
