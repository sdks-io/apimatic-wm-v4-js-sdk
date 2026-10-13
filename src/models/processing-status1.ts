import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current processing status of the feed */
export const ProcessingStatus1 = {
  Received: "RECEIVED",
  InProgress: "IN_PROGRESS",
  Done: "DONE",
  Error: "ERROR",
} as const;
export type ProcessingStatus1 = (typeof ProcessingStatus1)[keyof typeof ProcessingStatus1] | (string & {});

export const processingStatus1Schema: EnumSchema<ProcessingStatus1> =
  s.enumOf<ProcessingStatus1>(ProcessingStatus1);
