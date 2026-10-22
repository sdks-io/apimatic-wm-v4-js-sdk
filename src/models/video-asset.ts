import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { closedCaptionSchema, type ClosedCaption } from "./closed-caption.js";
import { mediaOperationsSchema, type MediaOperations } from "./media-operations.js";

/** Video rich media block. Required when `SupplierItemFeedHeader.subCategory` is `video`. */
export type VideoAsset = {
  /** Accessible URL for the hosted video asset. */
  richMediaVideoAssetUrl: string;
  /** Display title for the video. */
  richMediaVideoTitle: string;
  /** Accessible URL for the video thumbnail image. */
  richMediaVideoThumbnailUrl?: string;
  /** Video category label. Allowed value: `Product Overview`. @default "Product Overview" */
  richMediaVideoCategory?: "Product Overview";
  /**
   * Operation type. Allowed values: `Delink` and `null`(empty). Set to `Delink` to remove the GTIN
   * association from this asset. Set to `null` (empty) for create/edit operations.
   */
  mediaOperations?: MediaOperations | null;
  /** Closed caption entry for the video. Maximum allowed: 1. */
  richMediaClosedCaption?: ClosedCaption[];
};

export const videoAssetSchema: Schema<VideoAsset> = s.object<VideoAsset>({
  richMediaVideoAssetUrl: s.string(),
  richMediaVideoTitle: s.string(),
  richMediaVideoThumbnailUrl: s.optional(s.string()),
  richMediaVideoCategory: s.defaulted(s.literal("Product Overview"), "Product Overview"),
  mediaOperations: s.optionalNullable(s.lazy(() => mediaOperationsSchema)),
  richMediaClosedCaption: s.optional(s.array(s.lazy(() => closedCaptionSchema))),
});
