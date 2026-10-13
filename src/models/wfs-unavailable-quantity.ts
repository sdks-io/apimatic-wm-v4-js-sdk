import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WfsUnavailableQuantity = {
  /** Units held pending inventory review */
  inventoryReviewUnits?: number;
  /** Units held during fulfillment center movement */
  inventoryMovementUnits?: number;
};

export const wfsUnavailableQuantitySchema: Schema<WfsUnavailableQuantity> = s.object<WfsUnavailableQuantity>({
  inventoryReviewUnits: s.optional(s.int()),
  inventoryMovementUnits: s.optional(s.int()),
});
