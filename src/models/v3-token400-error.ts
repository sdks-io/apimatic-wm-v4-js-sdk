import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type V3Token400Error = {
  error?: Error[];
};

export const v3Token400ErrorSchema: Schema<V3Token400Error> = s.object<V3Token400Error>({
  error: s.optional(s.array(s.lazy(() => errorSchema))),
});
