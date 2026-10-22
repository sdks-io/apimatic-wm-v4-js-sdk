import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RichMediaClosedCaption = {
  /** Human-readable language name for this caption track. */
  richMediaCaptionLanguage?: string;
  /** URL of the closed caption file in `.vtt` format. */
  richMediaVideoClosedCaptionUrl?: string;
};

export const richMediaClosedCaptionSchema: Schema<RichMediaClosedCaption> = s.object<RichMediaClosedCaption>({
  richMediaCaptionLanguage: s.optional(s.string()),
  richMediaVideoClosedCaptionUrl: s.optional(s.string()),
});
