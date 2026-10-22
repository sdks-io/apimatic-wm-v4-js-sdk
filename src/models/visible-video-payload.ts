import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { videoAssetSchema, type VideoAsset } from "./video-asset.js";

/**
 * Visible block for a video rich media asset. Discriminator for this block is set as subcategory:
 * `VIDEO`
 */
export type VisibleVideoPayload = {
  /** Video rich media block. Required when `SupplierItemFeedHeader.subCategory` is `video`. */
  video?: VideoAsset;
};

export const visibleVideoPayloadSchema: Schema<VisibleVideoPayload> = s.object<VisibleVideoPayload>({
  video: s.optional(s.lazy(() => videoAssetSchema)),
  _keysMap: {
    video: "Video",
  },
});
