import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { item3Schema, type Item3 } from "./item3.js";
import { moneySchema, type Money } from "./money.js";
import { packageDimensionsSchema, type PackageDimensions } from "./package-dimensions.js";
import { weightSchema, type Weight } from "./weight.js";

export type Package = {
  dimensions: PackageDimensions;
  weight: Weight;
  insuredValue?: Money;
  isHazmat?: boolean;
  sellerDeclaredValue?: Money;
  /** Seller-supplied unique id for this package within the shipment. */
  packageClientReferenceId: string;
  items?: Item3[];
};

export const packageSchema: Schema<Package> = s.object<Package>({
  dimensions: packageDimensionsSchema,
  weight: weightSchema,
  insuredValue: s.optional(s.lazy(() => moneySchema)),
  isHazmat: s.optional(s.boolean()),
  sellerDeclaredValue: s.optional(s.lazy(() => moneySchema)),
  packageClientReferenceId: s.string(),
  items: s.optional(s.array(s.lazy(() => item3Schema))),
});
