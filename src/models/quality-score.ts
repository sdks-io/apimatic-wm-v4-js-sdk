import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./value.js";

export type QualityScore = {
  score?: number;
  values?: Value[];
};

export const qualityScoreSchema: Schema<QualityScore> = s.object<QualityScore>({
  score: s.optional(s.float64()),
  values: s.optional(s.array(s.lazy(() => valueSchema))),
});
