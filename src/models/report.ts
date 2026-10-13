import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { processingStatusSchema, type ProcessingStatus } from "./processing-status.js";

export type Report = {
  reportId: string;
  reportType: string;
  dataStartTime?: Date;
  dataEndTime?: Date;
  reportScheduleId?: string;
  createdTime?: Date;
  processingStatus: ProcessingStatus;
  processingStartTime?: Date;
  processingEndTime?: Date;
  /** Present only when processingStatus is DONE */
  reportDocumentId?: string;
};

export const reportSchema: Schema<Report> = s.object<Report>({
  reportId: s.string(),
  reportType: s.string(),
  dataStartTime: s.optional(s.dateTime()),
  dataEndTime: s.optional(s.dateTime()),
  reportScheduleId: s.optional(s.string()),
  createdTime: s.optional(s.dateTime()),
  processingStatus: processingStatusSchema,
  processingStartTime: s.optional(s.dateTime()),
  processingEndTime: s.optional(s.dateTime()),
  reportDocumentId: s.optional(s.string()),
});
