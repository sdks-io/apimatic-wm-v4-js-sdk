import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonBoxContentInformationSourceSchema,
  type CommonBoxContentInformationSource,
} from "./common-box-content-information-source.js";
import { commonDimensionsSchema, type CommonDimensions } from "./common-dimensions.js";
import { commonItemSchema, type CommonItem } from "./common-item.js";
import { commonRegionSchema, type CommonRegion } from "./common-region.js";
import { commonWeightSchema, type CommonWeight } from "./common-weight.js";

/** Contains information about a box used in the inbound plan. */
export type CommonBox = {
  /** The ID provided by Walmart that identifies a given box. */
  boxId?: string;
  /** Indication of how box content is meant to be provided. */
  contentInformationSource?: CommonBoxContentInformationSource;
  /** Representation of a location used within the inbounding experience. */
  destinationRegion?: CommonRegion;
  /** Measurement of a package's dimensions. */
  dimensions?: CommonDimensions;
  /** The external identifier for this container / box. */
  externalContainerIdentifier?: string;
  /** Type of the external identifier used. Can be: `WALMART`, `SSCC`. */
  externalContainerIdentifierType?: string;
  /** Items contained within the box. */
  items?: CommonItem[];
  /** Primary key to uniquely identify a Package (Box or Pallet). */
  packageId: string;
  /**
   * The number of containers where all other properties like weight or dimensions are identical.
   */
  quantity?: number;
  /** Template name of the box. */
  templateName?: string;
  /** The weight of a package. */
  weight?: CommonWeight;
};

export const commonBoxSchema: Schema<CommonBox> = s.object<CommonBox>({
  boxId: s.optional(s.string()),
  contentInformationSource: s.optional(s.lazy(() => commonBoxContentInformationSourceSchema)),
  destinationRegion: s.optional(s.lazy(() => commonRegionSchema)),
  dimensions: s.optional(s.lazy(() => commonDimensionsSchema)),
  externalContainerIdentifier: s.optional(s.string()),
  externalContainerIdentifierType: s.optional(s.string()),
  items: s.optional(s.array(s.lazy(() => commonItemSchema))),
  packageId: s.string(),
  quantity: s.optional(s.int()),
  templateName: s.optional(s.string()),
  weight: s.optional(s.lazy(() => commonWeightSchema)),
});
