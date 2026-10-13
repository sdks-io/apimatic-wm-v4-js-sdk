import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";

export type ErrorList = {
  errors: Error3[];
};

export const errorListSchema: Schema<ErrorList> = s.object<ErrorList>({
  errors: s.array(s.lazy(() => error3Schema)),
});
