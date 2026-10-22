import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

export type V3Token500Error = {
  error?: Error1[];
};

export const v3Token500ErrorSchema: Schema<V3Token500Error> = s.object<V3Token500Error>({
  error: s.optional(s.array(s.lazy(() => error1Schema))),
});
