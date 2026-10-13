import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonErrorSchema, type CommonError } from "./common-error.js";

/** A list of error responses returned when a request is unsuccessful. */
export type CommonErrorList = {
  /** List of errors. */
  errors: CommonError[];
};

export const commonErrorListSchema: Schema<CommonErrorList> = s.object<CommonErrorList>({
  errors: s.array(s.lazy(() => commonErrorSchema)),
});
