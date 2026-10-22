import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { qualityScore2Schema, type QualityScore2 } from "./quality-score2.js";
import { scoreDetails2Schema, type ScoreDetails2 } from "./score-details2.js";
import { stats2Schema, type Stats2 } from "./stats2.js";

export type Payload11 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  productId?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  scoreDetails?: ScoreDetails2;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  wfsEnabled?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  priority?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  productName?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  itemId?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  sellerId?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  pageViews?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  stats?: Stats2;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  imageUrL?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  qualityScore?: QualityScore2;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  offerId?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  sku?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  category?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  postPurchaseIssues?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  productType?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  condition?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  fastShippingRegionsCount?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  freeShippingRegionsCount?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  fastShippingFlag?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  freeShippingFlag?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  last30DaysConversionRate?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  last30DaysPageViews?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  gmv?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  isCustomerFavorites?: boolean;
  /** <br><b style='color:green;'>Market availability: US</b> */
  isInStock?: boolean;
  /** <br><b style='color:green;'>Market availability: US</b> */
  isFastAndFreeShipping?: boolean;
};

export const payload11Schema: Schema<Payload11> = s.object<Payload11>({
  productId: s.optional(s.string()),
  scoreDetails: s.optional(s.lazy(() => scoreDetails2Schema)),
  wfsEnabled: s.optional(s.string()),
  priority: s.optional(s.string()),
  productName: s.optional(s.string()),
  itemId: s.optional(s.string()),
  sellerId: s.optional(s.string()),
  pageViews: s.optional(s.string()),
  stats: s.optional(s.lazy(() => stats2Schema)),
  imageUrL: s.optional(s.string()),
  qualityScore: s.optional(s.lazy(() => qualityScore2Schema)),
  offerId: s.optional(s.string()),
  sku: s.optional(s.string()),
  category: s.optional(s.string()),
  postPurchaseIssues: s.optional(s.string()),
  productType: s.optional(s.string()),
  condition: s.optional(s.string()),
  fastShippingRegionsCount: s.optional(s.int()),
  freeShippingRegionsCount: s.optional(s.int()),
  fastShippingFlag: s.optional(s.int()),
  freeShippingFlag: s.optional(s.int()),
  last30DaysConversionRate: s.optional(s.float64()),
  last30DaysPageViews: s.optional(s.int()),
  gmv: s.optional(s.float64()),
  isCustomerFavorites: s.optional(s.boolean()),
  isInStock: s.optional(s.boolean()),
  isFastAndFreeShipping: s.optional(s.boolean()),
});
