import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of an operation. */
export const CommonOperationStatus = {
  Success: "SUCCESS",
  Failed: "FAILED",
  InProgress: "IN_PROGRESS",
} as const;
export type CommonOperationStatus =
  | (typeof CommonOperationStatus)[keyof typeof CommonOperationStatus]
  | (string & {});

export const commonOperationStatusSchema: EnumSchema<CommonOperationStatus> =
  s.enumOf<CommonOperationStatus>(CommonOperationStatus);
