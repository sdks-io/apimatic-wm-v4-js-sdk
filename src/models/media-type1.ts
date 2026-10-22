import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Media type as recorded for this specific item linkage. */
export const MediaType1 = {
  Video: "VIDEO",
  Images360: "IMAGES360",
} as const;
export type MediaType1 = (typeof MediaType1)[keyof typeof MediaType1] | (string & {});

export const mediaType1Schema: EnumSchema<MediaType1> = s.enumOf<MediaType1>(MediaType1);
