import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonErrorSchema, type CommonError } from "./common-error.js";

/** A list of error responses returned when a request is unsuccessful. */
export type CommonErrorListError = {
  /** List of errors. */
  errors: CommonError[];
};

export const commonErrorListErrorSchema: Schema<CommonErrorListError> = s.object<CommonErrorListError>({
  errors: s.array(s.lazy(() => commonErrorSchema)),
});
