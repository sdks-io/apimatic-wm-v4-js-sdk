import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";

export type ErrorList1 = {
  /** One or more errors describing why the request failed */
  errors: Error3[];
};

export const errorList1Schema: Schema<ErrorList1> = s.object<ErrorList1>({
  errors: s.array(s.lazy(() => error3Schema)),
});
