import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { competitor4Schema, type Competitor4 } from "./competitor4.js";
import { demandSalesTrends4Schema, type DemandSalesTrends4 } from "./demand-sales-trends4.js";
import { freeShippingSchema, type FreeShipping } from "./free-shipping.js";
import { itemAvailabilityStatus4Schema, type ItemAvailabilityStatus4 } from "./item-availability-status4.js";
import { salesInsightsSchema, type SalesInsights } from "./sales-insights.js";
import { walmart4Schema, type Walmart4 } from "./walmart4.js";

/** Details of the recommended item. */
export type ItemDetails3 = {
  /**
   * Title of the recommended item. <br><b style='color:green;'>Market availability: US | CA |
   * MX</span></b>
   */
  title?: string;
  /**
   * Brand of the recommended item. <br><b style='color:green;'>Market availability: US | CA |
   * MX</span></b>
   */
  brand?: string;
  /**
   * Category of the recommended item. <br><b style='color:green;'>Market availability: US | CA |
   * MX</span></b>
   */
  category?: string;
  /**
   * Indicates the product type of an item that can be used to set up this item using Item Setup
   * APIs or Item setup bulk upload. <br><b style='color:green;'>Market availability: US
   * only</span></b>
   */
  productType?: string;
  /**
   * GTIN of the recommended item. <br><b style='color:green;'>Market availability: US | CA |
   * MX</span></b>
   */
  gtin?: string;
  /**
   * Universal Product Code (UPC) of the recommended item. <br><b style='color:green;'>Market
   * availability: US | CA | MX</span></b>
   */
  upc?: string;
  /**
   * Stock Keeping Unit (SKU) of the recommended item. <br><b style='color:green;'>Market
   * availability: CA | MX</span></b>
   */
  sku?: string;
  /**
   * ISBN of the recommended item. <br><b style='color:green;'>Market availability: US
   * only</span></b>
   */
  isbn?: string;
  /**
   * European Article Number (EAN) of the recommended item. <br><b style='color:green;'>Market
   * availability: US only</span></b>
   */
  ean?: string;
  /**
   * Item availability status of the recommended item. <br><b style='color:green;'>Market
   * availability: US | CA | MX</span></b>
   *
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | EXISTING_IN_WALMART | Indicates that item is existing in Walmart. | string |
   * | NEW_TO_WALMART | Indicates that item is new to Walmart. | string |
   */
  itemAvailabilityStatus?: ItemAvailabilityStatus4;
  /**
   * Indicates the potential revenue the recommended item can bring in over a year. This field does
   * not promise the numbers indicated. <br><b style='color:green;'>Market availability: US | CA |
   * MX</span></b>
   */
  potentialSales?: string;
  /**
   * Rank of an item, from 1 to 10 (1 being highest), that indicates the relative potential sales of
   * a product in a category. This is an estimate based on customer demand, historical category
   * sales and other data points. <br><b style='color:green;'>Market availability: US | CA |
   * MX</span></b>
   */
  potentialSalesRank?: string;
  /**
   * Tags that indicate why an item is in demand, helping sellers quickly assess customer interest
   * and competitive signal. <br><b style='color:green;'>Market availability: US | CA | MX</b>
   */
  salesInsights?: SalesInsights;
  /**
   * Top Go‑Get Items are customer favorite items sellers are recommended to prioritize and bring to
   * their Walmart Catalog. <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  isTopGoGetItem?: boolean;
  /**
   * This field is deprecated.
   *
   * @deprecated
   */
  shoppingTrends?: string[] | null;
  /**
   * Indicates the months of the year when high demand is observed for the recommended item. The
   * sequence of month is in the decreasing order of the high demand. The values are comma
   * separated. <br><b style='color:green;'>Market availability: US only</span></b>
   *
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC | Months of the year. | string |
   */
  demandSalesTrends?: DemandSalesTrends4;
  /**
   * List of the most popular keywords that people have searched for, where the item shows up in the
   * result set. <br><b style='color:green;'>Market availability: US only</span></b>
   */
  searchKeywords?: string[];
  /**
   * Total number offers for this Item on Walmart. <br><b style='color:green;'>Market availability:
   * US only</span></b>
   */
  offerCount?: number;
  /**
   * Indicates if the shipping is free for a recommended item which is a buy box winner. <br><b
   * style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  freeShipping?: FreeShipping;
  /**
   * Average rating of the recommended item. <br><b style='color:green;'>Market availability: US
   * only</span></b>
   */
  rating?: number;
  /**
   * Total number of ratings for the recommended item. <br><b style='color:green;'>Market
   * availability: US only</span></b>
   */
  ratingCount?: number;
  /**
   * Primary variant item ID. <br><b style='color:green;'>Market availability: US only</span></b>
   */
  primaryVariantItemId?: string;
  /**
   * Indicates to ensure whether the item has variants or not. If it is <br><b
   * style='color:green;'>Market availability: US only</span></b>
   */
  hasVariants?: boolean;
  /**
   * Walmart's item information. <br><b style='color:green;'>Market availability: US | CA |
   * MX</span></b>
   */
  walmart?: Walmart4;
  /** Competitor's item information. */
  competitors?: Competitor4[];
};

export const itemDetails3Schema: Schema<ItemDetails3> = s.object<ItemDetails3>({
  title: s.optional(s.string()),
  brand: s.optional(s.string()),
  category: s.optional(s.string()),
  productType: s.optional(s.string()),
  gtin: s.optional(s.string()),
  upc: s.optional(s.string()),
  sku: s.optional(s.string()),
  isbn: s.optional(s.string()),
  ean: s.optional(s.string()),
  itemAvailabilityStatus: s.optional(s.lazy(() => itemAvailabilityStatus4Schema)),
  potentialSales: s.optional(s.string()),
  potentialSalesRank: s.optional(s.string()),
  salesInsights: s.optional(s.lazy(() => salesInsightsSchema)),
  isTopGoGetItem: s.optional(s.boolean()),
  shoppingTrends: s.optionalNullable(s.array(s.string())),
  demandSalesTrends: s.optional(s.lazy(() => demandSalesTrends4Schema)),
  searchKeywords: s.optional(s.array(s.string())),
  offerCount: s.optional(s.float64()),
  freeShipping: s.optional(s.lazy(() => freeShippingSchema)),
  rating: s.optional(s.float64()),
  ratingCount: s.optional(s.float64()),
  primaryVariantItemId: s.optional(s.string()),
  hasVariants: s.optional(s.boolean()),
  walmart: s.optional(s.lazy(() => walmart4Schema)),
  competitors: s.optional(s.array(s.lazy(() => competitor4Schema))),
});
