import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Breakdown of units that cannot be fulfilled. */
export type UnfulfillableQuantity = {
  /** Total units that cannot be fulfilled. */
  totalUnfulfillableQuantity?: number | null;
  /** Units damaged by a customer return. */
  customerDamagedQuantity?: number | null;
  /** Units damaged in the fulfillment center. */
  warehouseDamagedQuantity?: number | null;
  /** Units damaged by the distributor. */
  distributorDamagedQuantity?: number | null;
  /** Units damaged in transit by a carrier. */
  carrierDamagedQuantity?: number | null;
  /** Units identified as defective. */
  defectiveQuantity?: number | null;
  /** Units that have passed their expiration date. */
  expiredQuantity?: number | null;
};

export const unfulfillableQuantitySchema: Schema<UnfulfillableQuantity> = s.object<UnfulfillableQuantity>({
  totalUnfulfillableQuantity: s.optionalNullable(s.int()),
  customerDamagedQuantity: s.optionalNullable(s.int()),
  warehouseDamagedQuantity: s.optionalNullable(s.int()),
  distributorDamagedQuantity: s.optionalNullable(s.int()),
  carrierDamagedQuantity: s.optionalNullable(s.int()),
  defectiveQuantity: s.optionalNullable(s.int()),
  expiredQuantity: s.optionalNullable(s.int()),
});
