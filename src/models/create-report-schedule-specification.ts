import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { period1Schema, type Period1 } from "./period1.js";

export type CreateReportScheduleSpecification = {
  reportType: string;
  period: Period1;
  marketplaceIds?: string[];
  reportOptions?: Record<string, string>;
  /** When to first run the schedule (default now) */
  nextReportCreationTime?: Date;
};

export const createReportScheduleSpecificationSchema: Schema<CreateReportScheduleSpecification> =
  s.object<CreateReportScheduleSpecification>({
    reportType: s.string(),
    period: period1Schema,
    marketplaceIds: s.optional(s.array(s.string())),
    reportOptions: s.optional(s.record(s.string(), s.string())),
    nextReportCreationTime: s.optional(s.dateTime()),
  });
