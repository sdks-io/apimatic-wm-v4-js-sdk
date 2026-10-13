import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonCurrencySchema, type CommonCurrency } from "./common-currency.js";

/** Contains details about cost related modifications to the placement cost. */
export type CommonIncentive = {
  /** Description of the incentive. */
  description: string;
  /** Target of the incentive. Possible values: 'Placement Services', 'Fulfillment Fee Discount'. */
  target: string;
  /** Type of incentive. Possible values: `FEE`, `DISCOUNT`. */
  type: string;
  /** The type and amount of currency. */
  value: CommonCurrency;
};

export const commonIncentiveSchema: Schema<CommonIncentive> = s.object<CommonIncentive>({
  description: s.string(),
  target: s.string(),
  type: s.string(),
  value: commonCurrencySchema,
});
