import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RichMediaType = {
  Images360: "IMAGES360",
  Video: "VIDEO",
} as const;
export type RichMediaType = (typeof RichMediaType)[keyof typeof RichMediaType] | (string & {});

export const richMediaTypeSchema: EnumSchema<RichMediaType> = s.enumOf<RichMediaType>(RichMediaType);
