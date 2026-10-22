import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { semError400Schema, type SemError400 } from "./sem-error400.js";

export type SemErrorResponse500Error = {
  /** An array containing error messages related to the request. */
  error?: SemError400[];
};

export const semErrorResponse500ErrorSchema: Schema<SemErrorResponse500Error> =
  s.object<SemErrorResponse500Error>({
    error: s.optional(s.array(s.lazy(() => semError400Schema))),
  });
