import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Cancellations = {
  defectedOrder?: number;
  totalOrder?: number;
  rate?: number;
};

export const cancellationsSchema: Schema<Cancellations> = s.object<Cancellations>({
  defectedOrder: s.optional(s.int()),
  totalOrder: s.optional(s.int()),
  rate: s.optional(s.int()),
});
