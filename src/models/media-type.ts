import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of rich media asset. Determines the structure of the `richMediaAsset` object. */
export const MediaType = {
  Video: "VIDEO",
  Images360: "IMAGES360",
} as const;
export type MediaType = (typeof MediaType)[keyof typeof MediaType] | (string & {});

export const mediaTypeSchema: EnumSchema<MediaType> = s.enumOf<MediaType>(MediaType);
