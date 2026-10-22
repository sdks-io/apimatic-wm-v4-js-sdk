import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

export type V3Token500Error1 = {
  error?: Error1[];
};

export const v3Token500Error1Schema: Schema<V3Token500Error1> = s.object<V3Token500Error1>({
  error: s.optional(s.array(s.lazy(() => error1Schema))),
});
