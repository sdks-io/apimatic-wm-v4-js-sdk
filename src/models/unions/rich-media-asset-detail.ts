import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  images360AssetDetailPayloadSchema,
  type Images360AssetDetailPayload,
} from "../images360-asset-detail-payload.js";
import {
  videoAssetDetailPayloadSchema,
  type VideoAssetDetailPayload,
} from "../video-asset-detail-payload.js";

/**
 * Asset content details. Structure varies by `mediaType`: `VIDEO` assets contain video URL,
 * optional closed captions, category, and thumbnail; `IMAGES360` assets contain an ordered array of
 * image frame URLs.
 */
export type RichMediaAssetDetail =
  | (VideoAssetDetailPayload & { mediaType: "VIDEO" })
  | (Images360AssetDetailPayload & { mediaType: "IMAGES360" });

export const richMediaAssetDetailSchema: Schema<RichMediaAssetDetail> =
  s.discriminatedUnion<RichMediaAssetDetail>("mediaType", {
    VIDEO: videoAssetDetailPayloadSchema,
    IMAGES360: images360AssetDetailPayloadSchema,
  });
