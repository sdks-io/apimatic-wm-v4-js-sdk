import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Link = {
  /** URI to resolve the restriction (e.g. approval request URL) */
  resource: string;
  /** @default "GET" */
  verb?: "GET";
  title?: string;
  type?: string;
};

export const linkSchema: Schema<Link> = s.object<Link>({
  resource: s.string(),
  verb: s.defaulted(s.literal("GET"), "GET"),
  title: s.optional(s.string()),
  type: s.optional(s.string()),
});
