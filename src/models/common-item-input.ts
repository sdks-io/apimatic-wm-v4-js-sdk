import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonLabelOwnerSchema, type CommonLabelOwner } from "./common-label-owner.js";
import { commonPrepOwnerSchema, type CommonPrepOwner } from "./common-prep-owner.js";

/** Defines an item's input parameters. */
export type CommonItemInput = {
  /**
   * The expiration date of the MSKU. In ISO 8601 date format with pattern `YYYY-MM-DD`. Items with
   * the same MSKU but different expiration dates cannot go into the same box.
   */
  expiration?: string;
  /** Specifies who will label the items. Options include `SELLER` and `NONE`. */
  labelOwner: CommonLabelOwner;
  /** The manufacturing lot code. */
  manufacturingLotCode?: string;
  /** The merchant SKU, a merchant-supplied identifier of a specific SKU. */
  msku: string;
  /** The owner of the preparations, if special preparations are required. */
  prepOwner: CommonPrepOwner;
  /** The number of units of the specified MSKU that will be shipped. */
  quantity: number;
};

export const commonItemInputSchema: Schema<CommonItemInput> = s.object<CommonItemInput>({
  expiration: s.optional(s.string()),
  labelOwner: commonLabelOwnerSchema,
  manufacturingLotCode: s.optional(s.string()),
  msku: s.string(),
  prepOwner: commonPrepOwnerSchema,
  quantity: s.int(),
});
