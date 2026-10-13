import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Resource = {
  Feeds: "feeds",
  Reports: "reports",
} as const;
export type Resource = (typeof Resource)[keyof typeof Resource] | (string & {});

export const resourceSchema: EnumSchema<Resource> = s.enumOf<Resource>(Resource);
