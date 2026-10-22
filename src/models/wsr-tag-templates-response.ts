import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { wsrTagTemplateSchema, type WsrTagTemplate } from "./wsr-tag-template.js";

/** Response containing tag templates for different page types. */
export type WsrTagTemplatesResponse = {
  /**
   * List of tag templates for different page types.
   *
   * <span style="color:green">**Market availability: Global**</span>
   */
  data?: WsrTagTemplate[];
};

export const wsrTagTemplatesResponseSchema: Schema<WsrTagTemplatesResponse> =
  s.object<WsrTagTemplatesResponse>({
    data: s.optional(s.array(s.lazy(() => wsrTagTemplateSchema))),
  });
