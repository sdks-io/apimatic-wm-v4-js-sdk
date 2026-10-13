import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonBoxContentInformationSourceSchema,
  type CommonBoxContentInformationSource,
} from "./common-box-content-information-source.js";
import { commonDimensionsSchema, type CommonDimensions } from "./common-dimensions.js";
import { commonItemInputSchema, type CommonItemInput } from "./common-item-input.js";
import { commonWeightSchema, type CommonWeight } from "./common-weight.js";

/** Input information for a given box. */
export type CommonBoxInput = {
  /** Indication of how box content is meant to be provided. */
  contentInformationSource: CommonBoxContentInformationSource;
  /** Measurement of a package's dimensions. */
  dimensions: CommonDimensions;
  /**
   * The items and their quantity in the box. This must be empty if the box
   * `contentInformationSource` is `BARCODE_2D` or `MANUAL_PROCESS`.
   */
  items?: CommonItemInput[];
  /**
   * The number of containers where all other properties like weight or dimensions are identical.
   */
  quantity: number;
  /** The weight of a package. */
  weight: CommonWeight;
};

export const commonBoxInputSchema: Schema<CommonBoxInput> = s.object<CommonBoxInput>({
  contentInformationSource: commonBoxContentInformationSourceSchema,
  dimensions: commonDimensionsSchema,
  items: s.optional(s.array(s.lazy(() => commonItemInputSchema))),
  quantity: s.int(),
  weight: commonWeightSchema,
});
