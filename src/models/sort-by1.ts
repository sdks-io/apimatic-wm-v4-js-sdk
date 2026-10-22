import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortBy1 = {
  ItemId: "ITEM_ID",
  ProductName: "PRODUCT_NAME",
  CurrentPrice: "CURRENT_PRICE",
  ExpirationDate: "EXPIRATION_DATE",
  EnrollmentDate: "ENROLLMENT_DATE",
} as const;
export type SortBy1 = (typeof SortBy1)[keyof typeof SortBy1] | (string & {});

export const sortBy1Schema: EnumSchema<SortBy1> = s.enumOf<SortBy1>(SortBy1);
