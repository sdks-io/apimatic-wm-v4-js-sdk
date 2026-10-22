import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fastShippingSpeedSchema, type FastShippingSpeed } from "./fast-shipping-speed.js";
import { price2Schema, type Price2 } from "./price2.js";
import { publishAndTransactableSchema, type PublishAndTransactable } from "./publish-and-transactable.js";
import { shippingSpeedSchema, type ShippingSpeed } from "./shipping-speed.js";

export type Offer = {
  totalIssue?: number;
  issueCount?: number;
  price?: Price2;
  shippingSpeed?: ShippingSpeed;
  publishAndTransactable?: PublishAndTransactable;
  fastShippingSpeed?: FastShippingSpeed;
  freeShippingSpeed?: FastShippingSpeed;
};

export const offerSchema: Schema<Offer> = s.object<Offer>({
  totalIssue: s.optional(s.int()),
  issueCount: s.optional(s.int()),
  price: s.optional(s.lazy(() => price2Schema)),
  shippingSpeed: s.optional(s.lazy(() => shippingSpeedSchema)),
  publishAndTransactable: s.optional(s.lazy(() => publishAndTransactableSchema)),
  fastShippingSpeed: s.optional(s.lazy(() => fastShippingSpeedSchema)),
  freeShippingSpeed: s.optional(s.lazy(() => fastShippingSpeedSchema)),
});
