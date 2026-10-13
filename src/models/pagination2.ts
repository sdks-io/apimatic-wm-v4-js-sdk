import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pagination2 = {
  /** Maximum number of results per document */
  size?: number;
};

export const pagination2Schema: Schema<Pagination2> = s.object<Pagination2>({
  size: s.optional(s.int()),
});
