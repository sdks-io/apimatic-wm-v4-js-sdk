import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportTypeSchema, type ReportType } from "./report-type.js";

export type CreateReportSpecification = {
  /**
   * Report type — Walmart Partner Reporting Platform enum name. Runtime availability is
   * CCM-controlled; consult PRP docs for current PROD-enabled types.
   */
  reportType: ReportType;
  dataStartTime?: Date;
  dataEndTime?: Date;
  /** Additional report-type-specific options */
  reportOptions?: Record<string, string>;
  marketplaceIds?: string[];
};

export const createReportSpecificationSchema: Schema<CreateReportSpecification> =
  s.object<CreateReportSpecification>({
    reportType: reportTypeSchema,
    dataStartTime: s.optional(s.dateTime()),
    dataEndTime: s.optional(s.dateTime()),
    reportOptions: s.optional(s.record(s.string(), s.string())),
    marketplaceIds: s.optional(s.array(s.string())),
  });
