import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonPrepCategorySchema, type CommonPrepCategory } from "./common-prep-category.js";
import { commonPrepTypeSchema, type CommonPrepType } from "./common-prep-type.js";

/** An MSKU and its related prep details (input). */
export type CommonMskuPrepDetailInput = {
  /** The merchant SKU, a merchant-supplied identifier for a specific SKU. */
  msku: string;
  /** The preparation category for shipping an item to Walmart's fulfillment network. */
  prepCategory: CommonPrepCategory;
  /** A list of preparation types associated with a preparation category. */
  prepTypes: CommonPrepType[];
};

export const commonMskuPrepDetailInputSchema: Schema<CommonMskuPrepDetailInput> =
  s.object<CommonMskuPrepDetailInput>({
    msku: s.string(),
    prepCategory: commonPrepCategorySchema,
    prepTypes: s.array(s.lazy(() => commonPrepTypeSchema)),
  });
