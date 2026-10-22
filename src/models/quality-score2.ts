import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value3Schema, type Value3 } from "./value3.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type QualityScore2 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  score?: number;
  values?: Value3[];
};

export const qualityScore2Schema: Schema<QualityScore2> = s.object<QualityScore2>({
  score: s.optional(s.float64()),
  values: s.optional(s.array(s.lazy(() => value3Schema))),
});
