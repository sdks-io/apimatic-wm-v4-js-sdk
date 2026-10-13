import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountStatusSchema, type AccountStatus } from "./account-status.js";
import { sellerTypeSchema, type SellerType } from "./seller-type.js";

export type SellerAccount = {
  sellerId?: string;
  businessName?: string;
  email?: string;
  accountStatus?: AccountStatus;
  sellerType?: SellerType;
  createdAt?: Date;
};

export const sellerAccountSchema: Schema<SellerAccount> = s.object<SellerAccount>({
  sellerId: s.optional(s.string()),
  businessName: s.optional(s.string()),
  email: s.optional(s.string()),
  accountStatus: s.optional(s.lazy(() => accountStatusSchema)),
  sellerType: s.optional(s.lazy(() => sellerTypeSchema)),
  createdAt: s.optional(s.dateTime()),
});
