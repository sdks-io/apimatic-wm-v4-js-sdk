import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";

export type ErrorListError1 = {
  /** One or more errors describing why the request failed */
  errors: Error3[];
};

export const errorListError1Schema: Schema<ErrorListError1> = s.object<ErrorListError1>({
  errors: s.array(s.lazy(() => error3Schema)),
});
