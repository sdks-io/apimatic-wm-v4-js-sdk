import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReasonCode = {
  ApprovalRequired: "APPROVAL_REQUIRED",
  AsinNotApplicable: "ASIN_NOT_APPLICABLE",
  NotEligible: "NOT_ELIGIBLE",
  IneligibleItemCondition: "INELIGIBLE_ITEM_CONDITION",
  ComplianceBlocked: "COMPLIANCE_BLOCKED",
  Hazmat: "HAZMAT",
  Recalled: "RECALLED",
  RestrictedCategory: "RESTRICTED_CATEGORY",
} as const;
export type ReasonCode = (typeof ReasonCode)[keyof typeof ReasonCode] | (string & {});

export const reasonCodeSchema: EnumSchema<ReasonCode> = s.enumOf<ReasonCode>(ReasonCode);
