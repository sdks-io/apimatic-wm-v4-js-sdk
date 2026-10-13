import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SellerStatus = {
  Active: "Active",
  Inactive: "Inactive",
  Suspended: "Suspended",
  PendingApproval: "PendingApproval",
} as const;
export type SellerStatus = (typeof SellerStatus)[keyof typeof SellerStatus] | (string & {});

export const sellerStatusSchema: EnumSchema<SellerStatus> = s.enumOf<SellerStatus>(SellerStatus);
