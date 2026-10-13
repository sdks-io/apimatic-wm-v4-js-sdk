import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error detail when a fee estimate could not be computed. */
export type FeesEstimateError = {
  type: string;
  code: string;
  message: string;
  detail: string[];
};

export const feesEstimateErrorSchema: Schema<FeesEstimateError> = s.object<FeesEstimateError>({
  type: s.string(),
  code: s.string(),
  message: s.string(),
  detail: s.array(s.string()),
  _keysMap: {
    type: "Type",
    code: "Code",
    message: "Message",
    detail: "Detail",
  },
});
