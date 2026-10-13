import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains tokens to fetch from a certain page. */
export type CommonPagination = {
  /** When present, pass this string token in the next request to return the next response page. */
  nextToken?: string;
};

export const commonPaginationSchema: Schema<CommonPagination> = s.object<CommonPagination>({
  nextToken: s.optional(s.string()),
});
