import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Breakdown of reserved quantities. */
export type ReservedQuantity = {
  /** Total units reserved across all reservation types. */
  totalReservedQuantity?: number | null;
  /** Units reserved for pending customer orders. Null if no breakdown data is available. */
  pendingCustomerOrderQuantity?: number | null;
  /**
   * Units reserved for pending transfers between fulfillment centers. Null if no breakdown data is
   * available.
   */
  pendingTransshipmentQuantity?: number | null;
  /**
   * Units being processed at the fulfillment center (e.g. receiving, labeling). Null if no data is
   * available.
   */
  fcProcessingQuantity?: number | null;
};

export const reservedQuantitySchema: Schema<ReservedQuantity> = s.object<ReservedQuantity>({
  totalReservedQuantity: s.optionalNullable(s.int()),
  pendingCustomerOrderQuantity: s.optionalNullable(s.int()),
  pendingTransshipmentQuantity: s.optionalNullable(s.int()),
  fcProcessingQuantity: s.optionalNullable(s.int()),
});
