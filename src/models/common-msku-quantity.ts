import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents an MSKU and the related quantity. */
export type CommonMskuQuantity = {
  /** The merchant SKU, a merchant-supplied identifier for a specific SKU. */
  msku: string;
  /** A positive integer. */
  quantity: number;
};

export const commonMskuQuantitySchema: Schema<CommonMskuQuantity> = s.object<CommonMskuQuantity>({
  msku: s.string(),
  quantity: s.int(),
});
