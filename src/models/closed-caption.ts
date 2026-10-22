import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A single closed caption entry for a video asset. */
export type ClosedCaption = {
  /** URL of the closed caption file in `.vtt` format. */
  richMediaClosedCaptioningUrl?: string;
  /** Language of the captions. */
  richMediaCaptionLanguage?: string;
};

export const closedCaptionSchema: Schema<ClosedCaption> = s.object<ClosedCaption>({
  richMediaClosedCaptioningUrl: s.optional(s.string()),
  richMediaCaptionLanguage: s.optional(s.string()),
});
