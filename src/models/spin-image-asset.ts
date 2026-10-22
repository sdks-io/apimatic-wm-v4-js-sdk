import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mediaOperationsSchema, type MediaOperations } from "./media-operations.js";

/**
 * 360-spin image rich media block. Required when `SupplierItemFeedHeader.subCategory` is
 * `360_spin_image`.
 */
export type SpinImageAsset = {
  /**
   * Ordered list of 24 accessible 360-spin image frame URLs, numbered sequentially with suffix from
   * `_1` to `_24`.
   */
  richMediaImageUrl: string[];
  /** Display title for the 360-spin image. */
  richMedia360SpinTitle?: string;
  /**
   * Operation type. Allowed values: `Delink` and `null`(empty). Set to `Delink` to remove the GTIN
   * association from this asset. Set to `null` (empty) for create/edit operations.
   */
  mediaOperations?: MediaOperations | null;
};

export const spinImageAssetSchema: Schema<SpinImageAsset> = s.object<SpinImageAsset>({
  richMediaImageUrl: s.array(s.string()),
  richMedia360SpinTitle: s.optional(s.string()),
  mediaOperations: s.optionalNullable(s.lazy(() => mediaOperationsSchema)),
});
