import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pagination = {
  nextToken?: string;
  previousToken?: string;
};

export const paginationSchema: Schema<Pagination> = s.object<Pagination>({
  nextToken: s.optional(s.string()),
  previousToken: s.optional(s.string()),
});
