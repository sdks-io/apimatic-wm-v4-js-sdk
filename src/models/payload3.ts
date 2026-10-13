import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ineligibleRateSchema, type IneligibleRate } from "./ineligible-rate.js";
import { rateSchema, type Rate } from "./rate.js";

export type Payload3 = {
  rates?: Rate[];
  ineligibleRates?: IneligibleRate[];
  /**
   * Opaque token to be passed back on subsequent purchaseShipment or getAdditionalInputs calls to
   * identify this rate quote session.
   */
  requestToken?: string;
};

export const payload3Schema: Schema<Payload3> = s.object<Payload3>({
  rates: s.optional(s.array(s.lazy(() => rateSchema))),
  ineligibleRates: s.optional(s.array(s.lazy(() => ineligibleRateSchema))),
  requestToken: s.optional(s.string()),
});
