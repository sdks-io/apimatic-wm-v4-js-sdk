import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { semError400Schema, type SemError400 } from "./sem-error400.js";

export type SemErrorResponse404Error = {
  /** An array containing error messages related to the request. */
  error?: SemError400[];
};

export const semErrorResponse404ErrorSchema: Schema<SemErrorResponse404Error> =
  s.object<SemErrorResponse404Error>({
    error: s.optional(s.array(s.lazy(() => semError400Schema))),
  });
