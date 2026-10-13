import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pagination3 = {
  nextToken?: string;
};

export const pagination3Schema: Schema<Pagination3> = s.object<Pagination3>({
  nextToken: s.optional(s.string()),
});
