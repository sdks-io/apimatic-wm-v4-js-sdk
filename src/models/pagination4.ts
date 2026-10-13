import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pagination4 = {
  nextToken?: string;
  totalCount?: number;
};

export const pagination4Schema: Schema<Pagination4> = s.object<Pagination4>({
  nextToken: s.optional(s.string()),
  totalCount: s.optional(s.int()),
});
