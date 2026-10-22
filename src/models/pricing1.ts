import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comparisonPriceType6Schema, type ComparisonPriceType6 } from "./comparison-price-type6.js";
import { comparisonPrice7Schema, type ComparisonPrice7 } from "./comparison-price7.js";
import { currentPriceType6Schema, type CurrentPriceType6 } from "./current-price-type6.js";
import { currentPrice7Schema, type CurrentPrice7 } from "./current-price7.js";
import { pickupDiscount1Schema, type PickupDiscount1 } from "./pickup-discount1.js";
import { priceDisplayCodes3Schema, type PriceDisplayCodes3 } from "./price-display-codes3.js";
import { processMode6Schema, type ProcessMode6 } from "./process-mode6.js";

export type Pricing1 = {
  /** <br><b style='color:green;'>Market availability: Global</b> */
  currentPrice: CurrentPrice7;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  currentPriceType: CurrentPriceType6;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  comparisonPrice?: ComparisonPrice7;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  comparisonPriceType?: ComparisonPriceType6;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  savingsAmount?: number;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  savingsPercent?: number;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  priceDisplayCodes?: PriceDisplayCodes3;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  pickupDiscount?: PickupDiscount1;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  effectiveDate?: number;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  expirationDate?: number;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  processMode?: ProcessMode6;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  pid?: string;
};

export const pricing1Schema: Schema<Pricing1> = s.object<Pricing1>({
  currentPrice: currentPrice7Schema,
  currentPriceType: currentPriceType6Schema,
  comparisonPrice: s.optional(s.lazy(() => comparisonPrice7Schema)),
  comparisonPriceType: s.optional(s.lazy(() => comparisonPriceType6Schema)),
  savingsAmount: s.optional(s.float64()),
  savingsPercent: s.optional(s.float64()),
  priceDisplayCodes: s.optional(s.lazy(() => priceDisplayCodes3Schema)),
  pickupDiscount: s.optional(s.lazy(() => pickupDiscount1Schema)),
  effectiveDate: s.optional(s.int()),
  expirationDate: s.optional(s.int()),
  processMode: s.optional(s.lazy(() => processMode6Schema)),
  pid: s.optional(s.string()),
});
