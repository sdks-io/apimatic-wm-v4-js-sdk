import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Feeds = {
  FullAccess: "full_access",
  ViewOnly: "view_only",
  NoAccess: "no_access",
} as const;
export type Feeds = (typeof Feeds)[keyof typeof Feeds] | (string & {});

export const feedsSchema: EnumSchema<Feeds> = s.enumOf<Feeds>(Feeds);
