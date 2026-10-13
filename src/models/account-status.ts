import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountStatus = {
  Active: "Active",
  Inactive: "Inactive",
  Suspended: "Suspended",
} as const;
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus] | (string & {});

export const accountStatusSchema: EnumSchema<AccountStatus> = s.enumOf<AccountStatus>(AccountStatus);
