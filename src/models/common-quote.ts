import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonCurrencySchema, type CommonCurrency } from "./common-currency.js";

/** The estimated shipping cost associated with the transportation option. */
export type CommonQuote = {
  /** The type and amount of currency. */
  cost: CommonCurrency;
  /**
   * The time at which this transportation option quote expires. In ISO 8601 datetime with pattern
   * `yyyy-MM-ddTHH:mm:ss.sssZ`.
   */
  expiration?: Date;
  /** Voidable until timestamp. */
  voidableUntil?: Date;
};

export const commonQuoteSchema: Schema<CommonQuote> = s.object<CommonQuote>({
  cost: commonCurrencySchema,
  expiration: s.optional(s.dateTime()),
  voidableUntil: s.optional(s.dateTime()),
});
