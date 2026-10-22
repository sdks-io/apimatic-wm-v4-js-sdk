import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";

export type V3Lagtime400Error = {
  errors?: Error3[];
};

export const v3Lagtime400ErrorSchema: Schema<V3Lagtime400Error> = s.object<V3Lagtime400Error>({
  errors: s.optional(s.array(s.lazy(() => error3Schema))),
});
