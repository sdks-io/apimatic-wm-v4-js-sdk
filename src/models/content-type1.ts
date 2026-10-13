import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ContentType1 = {
  TextXmlCharsetUtf8: "text/xml; charset=UTF-8",
  TextTabSeparatedValuesCharsetUtf8: "text/tab-separated-values; charset=UTF-8",
  ApplicationJsonCharsetUtf8: "application/json; charset=UTF-8",
  ApplicationOctetStream: "application/octet-stream",
} as const;
export type ContentType1 = (typeof ContentType1)[keyof typeof ContentType1] | (string & {});

export const contentType1Schema: EnumSchema<ContentType1> = s.enumOf<ContentType1>(ContentType1);
