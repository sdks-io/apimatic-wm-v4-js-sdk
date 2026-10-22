import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Rich media content for an `IMAGES360` type asset. */
export type Images360AssetDetailPayload = {
  /** Discriminator field identifying this as an IMAGES360 asset. @default "IMAGES360" */
  mediaType?: "IMAGES360";
  /** Ordered list of 360-spin image frame URLs, numbered sequentially from `_1` to `_24`. */
  richMediaImageUrl?: string[];
};

export const images360AssetDetailPayloadSchema: Schema<Images360AssetDetailPayload> =
  s.object<Images360AssetDetailPayload>({
    mediaType: s.defaulted(s.literal("IMAGES360"), "IMAGES360"),
    richMediaImageUrl: s.optional(s.array(s.string())),
  });
