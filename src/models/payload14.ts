import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalAttributes3Schema, type AdditionalAttributes3 } from "./additional-attributes3.js";
import { itemIdentifier3Schema, type ItemIdentifier3 } from "./item-identifier3.js";
import { maxSalesRetailPrice2Schema, type MaxSalesRetailPrice2 } from "./max-sales-retail-price2.js";
import { minAdvtPrice2Schema, type MinAdvtPrice2 } from "./min-advt-price2.js";
import { pricingList2Schema, type PricingList2 } from "./pricing-list2.js";
import { rebate2Schema, type Rebate2 } from "./rebate2.js";

export type Payload14 = {
  /** <br><b style='color:green;'>Market availability: Global</b> */
  itemIdentifier: ItemIdentifier3;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  pricingList: PricingList2;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  maxSalesRetailPrice?: MaxSalesRetailPrice2;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  minAdvtPrice?: MinAdvtPrice2;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  rebate?: Rebate2;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  additionalAttributes?: AdditionalAttributes3;
};

export const payload14Schema: Schema<Payload14> = s.object<Payload14>({
  itemIdentifier: itemIdentifier3Schema,
  pricingList: pricingList2Schema,
  maxSalesRetailPrice: s.optional(s.lazy(() => maxSalesRetailPrice2Schema)),
  minAdvtPrice: s.optional(s.lazy(() => minAdvtPrice2Schema)),
  rebate: s.optional(s.lazy(() => rebate2Schema)),
  additionalAttributes: s.optional(s.lazy(() => additionalAttributes3Schema)),
});
