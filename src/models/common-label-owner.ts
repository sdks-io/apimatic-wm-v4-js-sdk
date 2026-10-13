import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies who will label the items. Options include `SELLER` and `NONE`., The owner of the
 * preparations, if special preparations are required., Specifies who will label the items. Options
 * include `SELLER` and `NONE`., The owner of the preparations, if special preparations are
 * required., Specifies who will label the items. Options include `SELLER` and `NONE`., The owner of
 * the preparations, if special preparations are required.
 */
export const CommonLabelOwner = {
  Seller: "SELLER",
  None: "NONE",
} as const;
export type CommonLabelOwner = (typeof CommonLabelOwner)[keyof typeof CommonLabelOwner] | (string & {});

export const commonLabelOwnerSchema: EnumSchema<CommonLabelOwner> =
  s.enumOf<CommonLabelOwner>(CommonLabelOwner);
