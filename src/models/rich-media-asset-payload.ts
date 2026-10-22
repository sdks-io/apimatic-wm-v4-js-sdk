import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { associatedItemPayloadSchema, type AssociatedItemPayload } from "./associated-item-payload.js";
import { mediaTypeSchema, type MediaType } from "./media-type.js";
import { sourceSchema, type Source } from "./source.js";
import { richMediaAssetDetailSchema, type RichMediaAssetDetail } from "./unions/rich-media-asset-detail.js";

export type RichMediaAssetPayload = {
  /** SHA-1 hash that uniquely identifies this rich media asset. */
  hash?: string;
  /** Display title for the rich media asset. */
  mediaTitle?: string;
  /** Type of rich media asset. Determines the structure of the `richMediaAsset` object. */
  mediaType?: MediaType;
  /**
   * Originating source of the rich media asset. Possible values: `MARKETPLACE_PARTNER`,
   * `SELLER_API`
   */
  source?: Source;
  /** List of items associated with this rich media asset. */
  items?: AssociatedItemPayload[];
  /**
   * Asset content details. Structure varies by `mediaType`: `VIDEO` assets contain video URL,
   * optional closed captions, category, and thumbnail; `IMAGES360` assets contain an ordered array
   * of image frame URLs.
   */
  richMediaAsset?: RichMediaAssetDetail;
  /** Timestamp when the asset was first created, in epoch milliseconds. */
  addedDtm?: string;
  /** Timestamp when the asset record was last updated, in epoch milliseconds. */
  updatedDtm?: string;
};

export const richMediaAssetPayloadSchema: Schema<RichMediaAssetPayload> = s.object<RichMediaAssetPayload>({
  hash: s.optional(s.string()),
  mediaTitle: s.optional(s.string()),
  mediaType: s.optional(s.lazy(() => mediaTypeSchema)),
  source: s.optional(s.lazy(() => sourceSchema)),
  items: s.optional(s.array(s.lazy(() => associatedItemPayloadSchema))),
  richMediaAsset: s.optional(s.lazy(() => richMediaAssetDetailSchema)),
  addedDtm: s.optional(s.string()),
  updatedDtm: s.optional(s.string()),
});
