import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AnnualStatementOptsResponse = {
  isOptedIn?: boolean;
  statementYear?: number;
};

export const annualStatementOptsResponseSchema: Schema<AnnualStatementOptsResponse> =
  s.object<AnnualStatementOptsResponse>({
    isOptedIn: s.optional(s.boolean()),
    statementYear: s.optional(s.int()),
  });
