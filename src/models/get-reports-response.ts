import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportSchema, type Report } from "./report.js";

export type GetReportsResponse = {
  nextToken?: string;
  reports?: Report[];
};

export const getReportsResponseSchema: Schema<GetReportsResponse> = s.object<GetReportsResponse>({
  nextToken: s.optional(s.string()),
  reports: s.optional(s.array(s.lazy(() => reportSchema))),
});
