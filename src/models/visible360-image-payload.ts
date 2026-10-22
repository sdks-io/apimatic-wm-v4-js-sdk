import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { spinImageAssetSchema, type SpinImageAsset } from "./spin-image-asset.js";

/**
 * Visible block for a 360-spin image rich media asset. Discriminator for this block is set as
 * subcategory: `IMAGES360`
 */
export type Visible360ImagePayload = {
  /**
   * 360-spin image rich media block. Required when `SupplierItemFeedHeader.subCategory` is
   * `360_spin_image`.
   */
  SpinImage360?: SpinImageAsset;
};

export const visible360ImagePayloadSchema: Schema<Visible360ImagePayload> = s.object<Visible360ImagePayload>({
  SpinImage360: s.optional(s.lazy(() => spinImageAssetSchema)),
  _keysMap: {
    SpinImage360: "360SpinImage",
  },
});
