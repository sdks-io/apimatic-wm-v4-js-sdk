import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method associated with the individual APIs being called as part of the batch request.
 */
export const HttpMethodEnum = {
  Get: "GET",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
  Post: "POST",
} as const;
export type HttpMethodEnum = (typeof HttpMethodEnum)[keyof typeof HttpMethodEnum] | (string & {});

export const httpMethodEnumSchema: EnumSchema<HttpMethodEnum> = s.enumOf<HttpMethodEnum>(HttpMethodEnum);
