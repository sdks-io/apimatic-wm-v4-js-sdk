import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Otd = {
  defectedOrder?: number;
  totalOrder?: number;
  rate?: number;
};

export const otdSchema: Schema<Otd> = s.object<Otd>({
  defectedOrder: s.optional(s.int()),
  totalOrder: s.optional(s.int()),
  rate: s.optional(s.int()),
});
