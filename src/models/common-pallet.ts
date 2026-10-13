import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonDimensionsSchema, type CommonDimensions } from "./common-dimensions.js";
import { commonStackabilitySchema, type CommonStackability } from "./common-stackability.js";
import { commonWeightSchema, type CommonWeight } from "./common-weight.js";

/** Contains information about a pallet used in the inbound plan. */
export type CommonPallet = {
  /** Measurement of a package's dimensions. */
  dimensions?: CommonDimensions;
  /** Primary key to uniquely identify a Package (Box or Pallet). */
  packageId: string;
  /**
   * The number of containers where all other properties like weight or dimensions are identical.
   */
  quantity?: number;
  /** Indicates whether pallets will be stacked when carrier arrives for pick-up. */
  stackability?: CommonStackability;
  /** The weight of a package. */
  weight?: CommonWeight;
};

export const commonPalletSchema: Schema<CommonPallet> = s.object<CommonPallet>({
  dimensions: s.optional(s.lazy(() => commonDimensionsSchema)),
  packageId: s.string(),
  quantity: s.optional(s.int()),
  stackability: s.optional(s.lazy(() => commonStackabilitySchema)),
  weight: s.optional(s.lazy(() => commonWeightSchema)),
});
