import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Can be one of the following: DATA_ERROR, SYSTEM_ERROR, TIMEOUT_ERROR, or INPROGRESS */
export const IngestionStatus = {
  Inprogress: "INPROGRESS",
  Success: "SUCCESS",
  DataError: "DATA_ERROR",
  SystemError: "SYSTEM_ERROR",
  TimeoutError: "TIMEOUT_ERROR",
} as const;
export type IngestionStatus = (typeof IngestionStatus)[keyof typeof IngestionStatus] | (string & {});

export const ingestionStatusSchema: EnumSchema<IngestionStatus> = s.enumOf<IngestionStatus>(IngestionStatus);
