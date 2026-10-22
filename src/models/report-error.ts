import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReportError = {
  /** Error code */
  code: string;
  /** Error description */
  description: string;
  /** Error severity */
  severity: string;
  /** Error category */
  category: string;
  /** Error Identifiers */
  errorIdentifiers: string;
};

export const reportErrorSchema: Schema<ReportError> = s.object<ReportError>({
  code: s.string(),
  description: s.string(),
  severity: s.string(),
  category: s.string(),
  errorIdentifiers: s.string(),
});
