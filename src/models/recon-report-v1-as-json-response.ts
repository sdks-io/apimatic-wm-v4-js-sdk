import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jsonObjectSchema, type JsonObject } from "./json-object.js";

export type ReconReportV1AsJsonResponse = {
  /**
   * content of the CSV file in the list format, each element in the list represents the row in CSV
   * file.
   */
  reportData?: JsonObject[];
  /** this field will be used in subsequent calls to fetch next set of records. */
  nextOffset?: number;
  /** records returned in the current response. */
  totalRecords?: number;
  /** total number of lines in the the file. */
  description?: string;
};

export const reconReportV1AsJsonResponseSchema: Schema<ReconReportV1AsJsonResponse> =
  s.object<ReconReportV1AsJsonResponse>({
    reportData: s.optional(s.array(s.lazy(() => jsonObjectSchema))),
    nextOffset: s.optional(s.int()),
    totalRecords: s.optional(s.int()),
    description: s.optional(s.string()),
  });
