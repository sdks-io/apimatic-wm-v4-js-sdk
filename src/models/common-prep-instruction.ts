import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonCurrencySchema, type CommonCurrency } from "./common-currency.js";

/** Information pertaining to the preparation of inbound goods. */
export type CommonPrepInstruction = {
  /** The type and amount of currency. */
  fee?: CommonCurrency;
  /** Owner of the preparations. Options include `SELLER` or `NONE`. */
  prepOwner?: string;
  /** Type of preparation that should be done. */
  prepType?: string;
};

export const commonPrepInstructionSchema: Schema<CommonPrepInstruction> = s.object<CommonPrepInstruction>({
  fee: s.optional(s.lazy(() => commonCurrencySchema)),
  prepOwner: s.optional(s.string()),
  prepType: s.optional(s.string()),
});
