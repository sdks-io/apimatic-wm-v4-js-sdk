import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * MIME type of the uploaded feed content. If omitted, the server infers from the file's
 * Content-Type in the multipart header.
 */
export const ContentType = {
  TextXmlCharsetUtf8: "text/xml; charset=UTF-8",
  TextTabSeparatedValuesCharsetUtf8: "text/tab-separated-values; charset=UTF-8",
  ApplicationJsonCharsetUtf8: "application/json; charset=UTF-8",
} as const;
export type ContentType = (typeof ContentType)[keyof typeof ContentType] | (string & {});

export const contentTypeSchema: EnumSchema<ContentType> = s.enumOf<ContentType>(ContentType);
