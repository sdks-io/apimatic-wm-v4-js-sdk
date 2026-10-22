import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { richMediaClosedCaptionSchema, type RichMediaClosedCaption } from "./rich-media-closed-caption.js";

/** Rich media content for a VIDEO type asset. */
export type VideoAssetDetailPayload = {
  /** Discriminator field identifying this as a VIDEO asset. @default "VIDEO" */
  mediaType?: "VIDEO";
  /** Closed caption tracks associated with the video. May be empty if no captions are available. */
  richMediaClosedCaption?: RichMediaClosedCaption[];
  /** URL of the video asset file. */
  richMediaVideoAssetUrl?: string;
  /** Category classifying the type of video content. */
  richMediaVideoCategory?: string;
  /** Display title of the video. */
  richMediaVideoTitle?: string;
  /** URL of the video thumbnail image. */
  richMediaVideoThumbnailUrl?: string;
};

export const videoAssetDetailPayloadSchema: Schema<VideoAssetDetailPayload> =
  s.object<VideoAssetDetailPayload>({
    mediaType: s.defaulted(s.literal("VIDEO"), "VIDEO"),
    richMediaClosedCaption: s.optional(s.array(s.lazy(() => richMediaClosedCaptionSchema))),
    richMediaVideoAssetUrl: s.optional(s.string()),
    richMediaVideoCategory: s.optional(s.string()),
    richMediaVideoTitle: s.optional(s.string()),
    richMediaVideoThumbnailUrl: s.optional(s.string()),
  });
