import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fastShippingSpeed5Schema, type FastShippingSpeed5 } from "./fast-shipping-speed5.js";
import { freeShippingSpeed5Schema, type FreeShippingSpeed5 } from "./free-shipping-speed5.js";
import { price3Schema, type Price3 } from "./price3.js";
import { publishAndTransactable3Schema, type PublishAndTransactable3 } from "./publish-and-transactable3.js";
import { shippingSpeed4Schema, type ShippingSpeed4 } from "./shipping-speed4.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type Offer2 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  issueCount?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  price?: Price3;
  /** <br><b style='color:green;'>Market availability: US only</b> */
  shippingSpeed?: ShippingSpeed4;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  publishAndTransactable?: PublishAndTransactable3;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  fastShippingSpeed?: FastShippingSpeed5;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  freeShippingSpeed?: FreeShippingSpeed5;
};

export const offer2Schema: Schema<Offer2> = s.object<Offer2>({
  issueCount: s.optional(s.int()),
  price: s.optional(s.lazy(() => price3Schema)),
  shippingSpeed: s.optional(s.lazy(() => shippingSpeed4Schema)),
  publishAndTransactable: s.optional(s.lazy(() => publishAndTransactable3Schema)),
  fastShippingSpeed: s.optional(s.lazy(() => fastShippingSpeed5Schema)),
  freeShippingSpeed: s.optional(s.lazy(() => freeShippingSpeed5Schema)),
});
