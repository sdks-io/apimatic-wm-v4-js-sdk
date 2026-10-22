import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemDto = {
  /** Identifier of the payer entity issuing the tax form. */
  payerId?: string;
  /** Taxpayer identification number associated with the payee. */
  tin?: string;
  /** Logical grouping identifier for related transactions or sub-accounts. */
  groupId?: string;
  /** Account identifier related to the payout or settlement. */
  account?: string;
  /** Unique tax form identifier referenced by the download endpoint. */
  formId?: string;
  /** Form modification level or version indicator. */
  formModLevel?: string;
  /** Payee-level modification indicator. */
  payeeModLevel?: string;
  /** Type of TIN provided (for example, SSN, EIN, ITIN). */
  tintype?: string;
};

export const itemDtoSchema: Schema<ItemDto> = s.object<ItemDto>({
  payerId: s.optional(s.string()),
  tin: s.optional(s.string()),
  groupId: s.optional(s.string()),
  account: s.optional(s.string()),
  formId: s.optional(s.string()),
  formModLevel: s.optional(s.string()),
  payeeModLevel: s.optional(s.string()),
  tintype: s.optional(s.string()),
});
