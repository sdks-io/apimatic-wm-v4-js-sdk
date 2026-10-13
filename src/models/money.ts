import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Money = {
  /** Monetary amount as string to preserve precision */
  amount?: string;
  /** @default "USD" */
  currencyCode?: string;
};

export const moneySchema: Schema<Money> = s.object<Money>({
  amount: s.optional(s.string()),
  currencyCode: s.defaulted(s.string(), "USD"),
});
