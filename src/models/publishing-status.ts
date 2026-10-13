import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current listing state of the item on Walmart.com. */
export const PublishingStatus = {
  Published: "Published",
  Unpublished: "Unpublished",
  Processing: "Processing",
  Stage: "Stage",
  Error: "Error",
  WfsIneligible: "WfsIneligible",
} as const;
export type PublishingStatus = (typeof PublishingStatus)[keyof typeof PublishingStatus] | (string & {});

export const publishingStatusSchema: EnumSchema<PublishingStatus> =
  s.enumOf<PublishingStatus>(PublishingStatus);
