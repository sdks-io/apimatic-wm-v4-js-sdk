import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProcessingStatus = {
  InQueue: "IN_QUEUE",
  InProgress: "IN_PROGRESS",
  Cancelled: "CANCELLED",
  Done: "DONE",
  Fatal: "FATAL",
} as const;
export type ProcessingStatus = (typeof ProcessingStatus)[keyof typeof ProcessingStatus] | (string & {});

export const processingStatusSchema: EnumSchema<ProcessingStatus> =
  s.enumOf<ProcessingStatus>(ProcessingStatus);
